import { Trash } from "@phosphor-icons/react"
import Image from "next/image"

interface ProductInBagProps {
  image: string
  title: string
  description: string
  value: number
  quantity: number
}

export const ProductInBag = ({image, title, description, value, quantity}: ProductInBagProps) => {
  const totalLimit = Array.from({length: 10}, (_, index) => index + 1)

  return (
    <div className="flex flex-row w-full h-[211px] max-w-[736px]">
      <Image 
        src={image} 
        alt='' 
        aria-hidden
        width={256}
        height={211}
        className="rounded-l-md"
      />
      <div className="bg-background rounded-r-lg pl-[32px] pr-4 pt-4">
        <span className="flex flex-row w-full justify-between items-center pb-3 text-xl">
          {title}
          <button className="">
            <Trash className="w-6 h-6 text-others-delete"/>
          </button>
        </span>
        <p className="pb-[25px] text-xs">{description}</p>
        <div className="flex flex-row w-full justify-between items-center pt-4">
          <select name="quantity" id="quantity" defaultValue={quantity} className="w-[65px] h-10 px-3 rounded-lg border bg-[#F3F5F6] border-[#A8A8B3]">
            {totalLimit.map((number) => (
              <option key={number} value={number}>{number}</option>
            ))}
          </select>
          <b>R$ {value}</b>
        </div>
      </div>
    </div>
  );
}
