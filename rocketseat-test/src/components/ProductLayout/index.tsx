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
  return (
    <div className="flex flex-col w-64 h-[378px] bg-white/40 rounded-lg">
      <Image 
        src={image!}
        className="w-64 h-[300px]"
        alt={`${title}`}
        aria-hidden
      />
      <p className={`${saira} font-saira text-texts-text font-light text-base`}>{title}</p>
      <p className={`${saira} font-saira text-[#09090A] font-semibold text-sm`}>{price}</p>
    </div>
  );
}

export const ProductCardWithLoader = (props: ProductProps) => {
  const { image, title, price } = props

  const isLoading = !image || !title || !price;

  return isLoading ? <ProductSkeletonLoader /> : <ProductLayout {...props} />;
}