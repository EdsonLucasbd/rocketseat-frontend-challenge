import { saira } from "@/utils/fonts";
import Image from "next/image";

interface ProductProps {
  image?: string
  title?: string
  price?: number
}

const ProductSkeletonLoader = () => {
  return (
    <div className="flex flex-col w-64 h-[378px] bg-white/40 rounded-lg animate-pulse">
      <div className="w-64 h-[300px] rounded-t-lg bg-gray-300"></div>
      <div className="h-6 mt-4 rounded-full bg-gray-300"></div>
      <div className="h-4 mt-2 rounded-full bg-gray-300"></div>
    </div>
  );
};

const ProductLayout = ({image, price, title}: ProductProps) => {
  const productPrice = (price ?? 0) / 100.0
  return (
    <div className="flex flex-col w-64 h-[378px]">
      <Image 
        src={image!}
        width={256}
        height={300}
        alt={`${title}`}
        className="h-[300px] rounded-t-lg"
        aria-hidden
      />
      <div className="flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2 rounded-b-lg">
        <p className={`${saira} font-saira text-texts-text font-light text-base`}>{title}</p>
        <hr className="bg-shapes-02"/>
        <p className={`${saira} font-saira text-[#09090A] font-semibold text-sm`}>R$ {productPrice}</p>
      </div>
    </div>
  );
}

export const ProductCardWithLoader = (props: ProductProps) => {
  const { image, title, price } = props

  const isLoading = !image || !title || !price;

  return isLoading ? <ProductSkeletonLoader /> : <ProductLayout {...props} />;
}