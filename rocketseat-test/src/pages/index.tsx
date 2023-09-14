import { CategoryNav } from "@/components/CategoryNavbar";
import { PageNavigationButton } from "@/components/PageNavigationButton";
import { ProductLayout } from "@/components/ProductLayout";
import { ProductSkeletonLoader } from "@/components/ProductSkeletonLoader";
import { client } from "@/graphql/client";
import { ProductsQuery } from "@/graphql/generate/graphql";
import { GetAllProducts } from "@/graphql/queries";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home({ products, totalItems, pageInfo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0
  const fakeProductsArray = Array.from({ length: 12 }, (_, index) => index + 1)
  const numberButtonsArray = Array.from({ length: Math.ceil(TOTAL_PRODUCTS! / 12) }, (_, index) => index++)
  const router = useRouter()
  const currentPage = router.asPath

  return (
    <>
      <Head>
        <title>E.L store</title>
      </Head>
      <div className='flex flex-col w-full'>
        <CategoryNav />

        <PageNavigationButton
          array={numberButtonsArray}
          currentPage={currentPage}
          hasNext={pageInfo?.hasNextPage}
          hasPrevious={pageInfo?.hasPreviousPage}
        />

        {
          typeof products === 'undefined' ? (
            <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
              md:gap-x-14 md:gap-y-6 md:w-full">
              {
                fakeProductsArray.map(item => <ProductSkeletonLoader key={item} />)
              }
            </div>
          )
            : (
              <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
              md:gap-x-14 md:gap-y-6 md:w-full">
                {
                  products?.map(({ node: product }) => (
                    <ProductLayout
                      key={product?.id}
                      image={product?.images[0].url}
                      title={product?.name}
                      price={product?.price}
                      id={product?.id}
                    />
                  ))
                }
              </div>
            )
        }
        <div className="mt-3 md:mt-[74px] -mb-8">
          <PageNavigationButton
            array={numberButtonsArray}
            currentPage={currentPage}
            hasNext={pageInfo?.hasNextPage}
            hasPrevious={pageInfo?.hasPreviousPage}
          />
        </div>
      </div>
    </>
  )
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { query } = context
  const page = Number(query.page || '')
  const sortField = query.sortField
  const category = "all"
  const productsPerPage = 12

  try {
    const {
      productsConnection: { edges: products, pageInfo, aggregate }
    } = await client.request<ProductsQuery>(GetAllProducts, {
      skip: (page + 1) * productsPerPage - productsPerPage,
      orderBy: sortField,
      slug: category
    })

    return {
      props: {
        products,
        totalItems: aggregate.count,
        pageInfo,
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