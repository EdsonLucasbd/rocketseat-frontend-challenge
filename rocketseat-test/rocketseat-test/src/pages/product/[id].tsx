import { convertProductPrice } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { ProductQuery } from "@/graphql/generate/graphql";
import { GetProduct } from "@/graphql/queries";
import { ArrowCircleLeft, ShoppingBagOpen } from "@phosphor-icons/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Head from "next/head";
import { SkeletonLoader } from "@/components/SkeletonLoader";

export interface IStoredItem {
  name: string,
  id: string,
  description: string
  image_url: string
  price: number
  quantity: number
}

export default function Product({ product }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const translatedCategoryName = product?.categories[0].name === 't-shirts' ? 'Camiseta' : 'Caneca'
  const price = Number(convertProductPrice(product?.price))

  const { addItemToCart } = useContext(CartContext)

  async function setProductInBag({ name, id, price, description, image_url, quantity = 1 }: IStoredItem) {

    addItemToCart(id, quantity, price, name, description, image_url)

  }

  return (
    <>
      <Head>
        <title>E.L Store | {product?.name}</title>
      </Head>
      <div className="flex flex-col">
        <button
          onClick={() => router.back()}
          className="flex items-center w-[85px] gap-2 font-medium text-color-text 
        text-sm mt-[25px] mb-[22px] hover:ring-2 hover:ring-color-text hover:rounded-full p-1"
        >
          <ArrowCircleLeft className="w-6 h-6" />
          Voltar
        </button>
        {product &&
          <div className="relative flex flex-col md:flex-row h-full md:h-[580px]">
            <Image
              priority
              src={product.images[0].url}
              alt={`Foto do produto ${product?.name}`}
              width={640}
              height={580}
              className="flex flex-1 w-full max-w-[640px] h-full max-h-[580px] rounded"
              onLoadingComplete={() => setIsLoading(false)}
            />

            {isLoading && <SkeletonLoader className="absolute left-0 w-full max-w-[640px] h-[280px] max-h-[580px]" />}

            <div className="flex flex-col gap-2 mt-8 md:mt-0 md:ml-8 max-w-[448px]">
              <p className="mb-3 text-base text-[#41414D]">{translatedCategoryName}</p>
              <p className="mb-1 font-light text-[32px] text-[#41414D]">{product.name}</p>
              <b className="mb-3 md:mb-6 text-xl">R$ {price}</b>
              <p className="mb-11 md:mb-[58px] text-xs text-[#41414D]">*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
              <div className="flex flex-col gap-2 mb-8 md:mb-auto">
                <p className="font-medium text-color-text">Descrição</p>
                <p className="text-sm text-[#41414D]">{product.description}</p>
              </div>
              <button
                onClick={() => setProductInBag({ name: product.name, id: product.id, price, description: product.description, image_url: product.images[0].url, quantity: 1 })}
                className="flex items-center justify-center gap-3 w-full h-11 rounded text-background bg-brand-blue
              hover:bg-brand-blue/90">
                <ShoppingBagOpen className="w-6 h-6" />
                ADICIONAR AO CARRINHO
              </button>
            </div>
          </div>
        }

      </div>
    </>
  );
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context
  const id = query.id
  try {
    const { product } = await client.request<ProductQuery>(
      GetProduct,
      {
        id
      }
    )

    return {
      props: {
        product: product
      }
    }
  } catch (error) {
    console.error('Ocorreu um erro inesperado: ', error)
  }
}