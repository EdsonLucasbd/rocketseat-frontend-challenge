import Head from 'next/head'
import { CategoryNav } from "@/components/CategoryNavbar";
import { PageNavigationButton } from "@/components/PageNavigationButton";
import { ProductLayout } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { SearchProductsQuery } from "@/graphql/generate/graphql";
import { SearchProducts } from "@/graphql/queries";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { Suspense } from 'react';
import { ProductSkeletonLoader } from '@/components/ProductSkeletonLoader';

export default function Search({ products, pageInfo, totalItems }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0
  const fakeProductsArray = Array.from({ length: 12 }, (_, index) => index + 1)
  const numberButtonsArray = Array.from({ length: Math.ceil(TOTAL_PRODUCTS! / 12) }, (_, index) => index++)
  const router = useRouter()
  const currentPage = router.asPath

  return (
    <>
      <Head>
        <title>E.L store | {router.query.search}</title>
      </Head>
      <div className='flex flex-col'>
        <CategoryNav />

        <PageNavigationButton
          array={numberButtonsArray}
          currentPage={currentPage}
          hasNext={pageInfo?.hasNextPage}
          hasPrevious={pageInfo?.hasPreviousPage}
        />

        {
          typeof products === undefined ? (
            <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
            md:gap-x-14 md:gap-y-6 md:w-full">
              {
                fakeProductsArray.map(item => <ProductLayout key={item} />)
              }
            </div>
          ) : (
            <div className="grid grid-cols-2 w-screen gap-y-9 md:grid-cols-4 
            md:gap-x-14 md:gap-y-6 md:w-full">
              {
                products?.map(({ node: product }) => (
                  <Suspense fallback={<ProductSkeletonLoader />} key={product?.id}>
                    <ProductLayout
                      image={product?.images[0].url}
                      title={product?.name}
                      price={product?.price}
                      id={product?.id}
                    />
                  </Suspense>
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
  const productName = query.search
  const sortField = query.sortField
  const page = Number(query.page || 0)
  const productsPerPage = 12

  try {
    const {
      productsConnection: { edges: products, pageInfo, aggregate }
    } = await client.request<SearchProductsQuery>(
      SearchProducts,
      {
        skip: (page + 1) * productsPerPage - productsPerPage,
        orderBy: sortField,
        _search: productName,
      }
    );

    return {
      props: {
        products,
        pageInfo,
        totalItems: aggregate.count
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