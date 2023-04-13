import { CategoryNav } from "@/components/CategoryNavbar";
import { ProductCardWithLoader } from "@/components/ProductLayout";
import { client } from "@/graphql/client";
import { Product } from "@/graphql/generate/graphql";
import { GetAllProducts } from "@/graphql/queries";
import { useQuery } from "@apollo/client";

export default function Home() {
  const { loading, error, data } = useQuery<Product[]>(GetAllProducts)
  const fakeProductsArray = Array.from({length: 12}, (_, index) => index + 1)
  if (loading || typeof data === 'undefined') {
    return (
      <div className="pt-6 flex flex-row gap-x-8 gap-y-6 w-full flex-wrap">
        {
          fakeProductsArray.map(item => <ProductCardWithLoader key={item} />)
        }
      </div>
    );
  }

  if (error) {
    return <p>Ocorreu um erro ao buscar os produtos: {error.message}</p>;
  }


  return (
    <div className='flex flex-col'>
      <CategoryNav />
      {
        Array.isArray(data) && 
        <div className="pt-6">
          {
            data?.map((product) => (
              <ProductCardWithLoader 
                key={product.id}
                image={product.image_url}
                title={product.name}
                price={product.price_in_cents}
              />
            )) ?? []
          }  
        </div>
      }
    </div>
  )
}


// Home.getInitialProps = async (context) => {
//   const newClient = client

//   try {
//     const {} = await useQuery<Product[]>(GetAllProducts)
//   }
// }