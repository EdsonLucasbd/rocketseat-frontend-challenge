import { convertProductPrice } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { ProductQuery } from "@/graphql/generate/graphql";
import { GetProduct } from "@/graphql/queries";
import { ArrowCircleLeft, ShoppingBagOpen } from "@phosphor-icons/react";
import localforage from "localforage";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

export interface IStoredItem {
  name: string, 
  id: string,
  description: string
  image_url: string
  price: number
}

export default function Product({product}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter()
  const translatedCategoryName = product?.category === 't-shirts' ? 'Camiseta' : 'Caneca'
  const price = Number(convertProductPrice(product?.price_in_cents))

  async function setProductInBag({name, id, price, description, image_url}: IStoredItem) {
    const product = {name, id, price, description, image_url}
    
    const storedProducts = await localforage.getItem<object[]>('shoppingCart') || []

    storedProducts.push(product)

    localforage.setItem('shoppingCart', storedProducts).then(() => {
      console.log('produto adicionado no carrinho')
      router.push('/shoppingCart')
    }).catch((error) => {
      console.error('Erro ao armazenar itens no carrinho:', error)
    })
  }

  return (
    <div className="flex flex-col">
      <button 
        onClick={() => router.back()}
        className="flex items-center w-[71px] gap-2 font-medium text-texts-text text-sm mt-[25px] mb-[22px]"
      >
        <ArrowCircleLeft className="w-6 h-6"/>
        Voltar
      </button>
      {product && 
        <div className="flex flex-row h-[580px]">
          <Image 
            priority
            src={product?.image_url}
            alt={`Foto do produto ${product?.name}`}
            width={640} 
            height={580} 
            className="flex flex-1 w-full max-w-[640px] h-full max-h-[580px] rounded"
          />
          <div className="flex flex-col gap-2 ml-8 max-w-[448px]">
            <p className="mb-3 text-base text-[#41414D]">{translatedCategoryName}</p>
            <p className="mb-1 font-light text-[32px] text-[#41414D]">{product.name}</p>
            <b className="mb-6 text-xl">R$ {price}</b>
            <p className="mb-[58px] text-xs text-[#41414D]">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <div className="flex flex-col gap-2 mb-auto">
              <p className="font-medium text-texts-text">Descrição</p>
              <p className="text-sm text-[#41414D]">{product.description}</p>
            </div>
            <button 
              onClick={() => setProductInBag({name: product.name, id: product.id, price, description: product.description, image_url: product.image_url})}
              className="flex items-center justify-center gap-3 w-full h-11 rounded text-background bg-brand-blue
              hover:bg-brand-blue/90">
              <ShoppingBagOpen className="w-6 h-6"/>
              ADICIONAR AO CARRINHO
            </button>
          </div>
        </div>
      }
      
    </div>
  );
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const {query} = context
  const id = query.id
  try {
    const {data} = await client.query<ProductQuery>({
      query: GetProduct,
      variables: {
        id
      }
    })

    return {
      props: {
        product: data.Product
      }
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado: ', error)
  }
}