import { CategoryNav } from "@/components/CategoryNavbar";
import { PageNavigationButton } from "@/components/PageNavigationButton";
import { ProductCardWithLoader } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { AllProductsQuery } from "@/graphql/generate/graphql";
import { GetAllProducts } from "@/graphql/queries";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ products }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // const { loading, error, data } = useQuery<Product[]>(GetAllProducts)
  const TOTAL_PRODUCTS = 60
  const fakeProductsArray = Array.from({ length: 12 }, (_, index) => index + 1)
  const numberButtonsArray = Array.from({ length: TOTAL_PRODUCTS / 12 }, (_, index) => index++)
  const router = useRouter()
  const currentPage = router.asPath

  return (
    <>
      <Head>
        <title>E.L store</title>
      </Head>
      <div className='flex flex-col w-full'>
        <CategoryNav />

        <PageNavigationButton array={numberButtonsArray} currentPage={currentPage} />

        {
          typeof products === 'undefined' ? (
            <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
              md:gap-x-14 md:gap-y-6 md:w-full">
              {
                fakeProductsArray.map(item => <ProductCardWithLoader key={item} />)
              }
            </div>
          ) : (
            <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
              md:gap-x-14 md:gap-y-6 md:w-full">
              {
                products?.map((product) => (
                  <ProductCardWithLoader
                    key={product?.id}
                    id={product?.id}
                    image={product?.image_url}
                    title={product?.name}
                    price={product?.price_in_cents}
                  />
                ))
              }
            </div>
          )
        }
        <div className="mt-3 md:mt-[74px] -mb-8">
          <PageNavigationButton array={numberButtonsArray} currentPage={currentPage} />
        </div>
      </div>
    </>
  )
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context
  const page = Number(query.page || '')
  const sortField = query.sortField || ''
  const sortOrder = query.sortOrder || ''

  try {
    const { data } = await client.query<AllProductsQuery>({
      query: GetAllProducts,
      variables: {
        page,
        perPage: 12,
        sortField,
        sortOrder
      }
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