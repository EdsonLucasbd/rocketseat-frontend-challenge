import { saira } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  image?: string
  title?: string
  price?: number
  id?: string
}

export const convertProductPrice = (price: number | undefined) => {
  return ((price ?? 0) / 100.00).toFixed(2)
}

const ProductSkeletonLoader = () => {
  return (
    <div className="flex flex-col w-32 h-[189px] md:w-64 md:h-[378px] 
      bg-white/40 rounded-lg animate-pulse">
      <div className="w-32 h-[189px] md:w-64 md:h-[300px] rounded-t-lg bg-gray-300"></div>
      <div className="h-6 mt-4 rounded-full bg-gray-300"></div>
      <div className="h-4 mt-2 rounded-full bg-gray-300"></div>
    </div>
  );
};

const ProductLayout = ({ image, price, title, id }: ProductProps) => {
  const productPrice = convertProductPrice(price)
  return (
    <Link
      className="flex flex-col w-32 h-[200px] md:w-64 md:h-[378px] hover:shadow-lg 
        hover:scale-105 rounded-lg duration-200 transition-all ease-in-out"
      href={`/product/${id}`}
    >
      <Image
        src={image!}
        width={256}
        height={300}
        alt={`${title}`}
        className="h-[300px] rounded-t-lg"
        aria-hidden
      />
      <div className="flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2 
        rounded-b-lg">
        <p className={`${saira} font-saira text-color-text font-light text-xs md:text-base`}>{title}</p>
        <hr className="bg-shapes-02" />
        <p className={`${saira} font-saira text-[#09090A] font-semibold text-xs md:text-sm`}>R$ {productPrice}</p>
      </div>
    </Link>
  );
}

export const ProductCardWithLoader = (props: ProductProps) => {
  const { image, title, price, id } = props

  const isLoading = !image || !title || !price || !id;

  return isLoading ? <ProductSkeletonLoader /> : <ProductLayout  {...props} />;
}