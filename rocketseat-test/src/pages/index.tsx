import { CategoryNav } from "@/components/CategoryNavbar";
import { ProductCardWithLoader } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { Product, AllProductsQuery } from "@/graphql/generate/graphql";
import { GetAllProducts } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { InferGetServerSidePropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { loading, error, data } = useQuery<Product[]>(GetAllProducts)
  const fakeProductsArray = Array.from({length: 12}, (_, index) => index + 1)
  const numberButtonsArray = Array.from({length: (products?.length ?? 0)/ 12}, (_, index) => index + 1)
  const router = useRouter()  
  const currentPage = router.asPath

  return (
    <div className='flex flex-col'>
      <CategoryNav />

      <div className="flex items-center justify-end gap-[2px] pb-8 pt-6">
        {
          numberButtonsArray.map((buttonNumber) => (
            <Link 
              key={buttonNumber} 
              href={`?page=${buttonNumber}`} 
              aria-label={`acessar a página ${buttonNumber}`}
              className={`flex items-center justify-center rounded-lg w-8 h-8 
                ${currentPage === `/?page=${buttonNumber}` ? 'bg-background text-others-orange_low' : 'bg-[#E9E9F0] text-texts-complement'}
                hover:bg-shapes-02`}
            >
              {buttonNumber}
            </Link>
          ))
        }

        <div className="flex flex-row gap-1 ml-1">
          <button 
            aria-label='voltar uma página'
            className='flex items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-texts-complement
            hover:bg-shapes-02'
            onClick={router.back}
          >
            <CaretLeft />
          </button>
          <button 
            aria-label='voltar uma página'
            className='flex items-center justify-center rounded-lg w-8 h-8 bg-[#E9E9F0] text-texts-complement
            hover:bg-shapes-02'
            onClick={() => {}}
          >
            <CaretRight />
          </button>
        </div>
        
      </div>
      {
        typeof products === 'undefined' ? (
          <div className="flex flex-row gap-x-8 gap-y-6 w-full flex-wrap">
            {
              fakeProductsArray.map(item => <ProductCardWithLoader key={item} />)
            }
          </div>
        ) : (
          <div className="flex flex-row gap-x-8 gap-y-6 w-full flex-wrap">
          {
            products?.map((product) => (
              <ProductCardWithLoader 
                key={product?.id}
                image={product?.image_url}
                title={product?.name}
                price={product?.price_in_cents}
              />
            ))
          }  
        </div>
        )
        
      }
    </div>
  )
}


export const getServerSideProps = async () => {
  try {
    const { data } = await client.query<AllProductsQuery>({
      query: GetAllProducts,
    });
    
    return {
      props: {
        products: data.allProducts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        products: [],
      },
    };
  }

}