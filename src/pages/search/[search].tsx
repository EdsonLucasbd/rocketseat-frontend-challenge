import Head from 'next/head'
import { PageNavigationButton } from "@/components/PageNavigationButton";
import { ProductLayout } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { SearchProductsQuery } from "@/graphql/generate/graphql";
import { SearchProducts } from "@/graphql/queries";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { SmileySad } from '@phosphor-icons/react';
import { NavBarMenu } from '@/components/NavBarMenu';

export default function Search({ products, pageInfo, totalItems }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const TOTAL_PRODUCTS = products.length > 0 ? totalItems : 0
  const fakeProductsArray = Array.from({ length: 12 }, (_, index) => index + 1)
  const numberButtonsArray = Array.from({ length: Math.ceil(TOTAL_PRODUCTS! / 12) }, (_, index) => index++)
  const router = useRouter()
  const currentPage = router.asPath
  const { search } = router.query

  return (
    <>
      <Head>
        <title>E.L store | {router.query.search}</title>
      </Head>
      <div className='flex flex-col'>
        <NavBarMenu />

        <PageNavigationButton
          array={numberButtonsArray}
          currentPage={currentPage}
          hasNext={pageInfo?.hasNextPage}
          hasPrevious={pageInfo?.hasPreviousPage}
        />

        {
          products.length === 0 && (
            <div className='flex flex-col items-center justify-center my-[50%] 
              h-max w-full md:h-full md:my-[10%] space-y-8'>
              <h2 className='text-2xl md:text-4xl gap-y-1 flex flex-col
                items-center justify-center md:flex-row md:gap-x-3 text-color-title'>
                Nenhum resultado para <span className='text-brand-orange font-semibold text-3xl md:text-5xl'>&ldquo;{search}&rdquo;</span>
                <SmileySad className='text-color-title text-4xl md:text-6xl' /></h2>
              <p className='text-color-title text-center text-sm md:text-lg'>Se você não encontrou o que procurava, tente novamente.</p>
            </div>
          )
        }

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