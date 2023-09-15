import { saira } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProductSkeletonLoader } from "../ProductSkeletonLoader";

interface ProductProps {
  image?: string
  title?: string
  price?: number
  id?: string
}

export const convertProductPrice = (price: number | undefined) => {
  return ((price ?? 0) / 100.00).toFixed(2)
}

export const ProductLayout = ({ image, price, title, id }: ProductProps) => {
  const productPrice = convertProductPrice(price)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <ProductSkeletonLoader />
      )}

      <Link
        className="flex flex-col w-32 h-[200px] md:w-64 md:h-[378px] hover:shadow-lg 
        hover:scale-105 rounded-lg duration-200 transition-all ease-in-out
        animate-fade-in-bottom"
        href={`/product/${id}`}
      >
        <Image
          src={image!}
          width={256}
          height={300}
          alt={`${title}`}
          className="h-[300px] rounded-t-lg object-fill"
          aria-hidden
          onLoadingComplete={handleImageLoad}
        />
        <div className="flex flex-col bg-white/40 h-[78px] py-2 px-3 gap-y-2 
        rounded-b-lg">
          <p className={`${saira} font-saira text-color-text font-light text-xs md:text-base`}>{title}</p>
          <hr className="bg-shapes-02" />
          <p className={`${saira} font-saira text-[#09090A] font-semibold text-xs md:text-sm`}>R$ {productPrice}</p>
        </div>
      </Link>
    </>
  );
}