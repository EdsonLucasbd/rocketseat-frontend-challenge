import { CategoryNav } from "@/components/CategoryNavbar";
import { PageNavigationButton } from "@/components/PageNavigationButton";
import { ProductCardWithLoader } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { AllProductsQuery } from "@/graphql/generate/graphql";
import { GetAllProducts } from "@/graphql/queries";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

export default function Category({products}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const TOTAL_PRODUCTS = 30
  const fakeProductsArray = Array.from({length: 12}, (_, index) => index + 1)
  const numberButtonsArray = Array.from({length: Math.ceil(TOTAL_PRODUCTS / 12)}, (_, index) => index ++)
  const router = useRouter()  
  const currentPage = router.asPath

  return (
    <div className='flex flex-col'>
      <CategoryNav />
      
      <PageNavigationButton array={numberButtonsArray} currentPage={currentPage} />

      {
        typeof products === 'undefined' ? (
          <div className="grid grid-cols-4 gap-x-8 gap-y-6 w-full">
            {
              fakeProductsArray.map(item => <ProductCardWithLoader key={item} />)
            }
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-x-8 gap-y-6 w-full">
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
      <div className="mt-[74px] -mb-8">
      <PageNavigationButton array={numberButtonsArray} currentPage={currentPage} />
      </div>
    </div>
  )
}


export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const {query} = context
  const page = Number(query.page || 0) 
  const category = query.category
  const sortField = query.sortField || ''
  const sortOrder = query.sortOrder || ''

  try {
    const { data } = await client.query<AllProductsQuery>({
      query: GetAllProducts,
      variables: {
        page,
        perPage: 12,
        filter: {category: category},
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