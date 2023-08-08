import { Trash } from "@phosphor-icons/react"
import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

interface ProductInBagProps {
  id: string
  image: string
  title: string
  description: string
  value: number
  quantity: number
  deleteItem: (id: string) => void
  changeQuantity: (event: React.ChangeEvent<HTMLSelectElement>, id: string) => void
}

export const ProductInBag = ({ id, image, title, description, value, quantity, deleteItem, changeQuantity }: ProductInBagProps) => {
  const totalLimit = Array.from({ length: 10 }, (_, index) => index + 1)

  const { updateItemQuantity } = useContext(CartContext)

  return (
    <div className="flex flex-row w-full h-[13.1875rem] max-w-[46rem] shadow-md">
      <Image
        src={image}
        alt=''
        aria-hidden
        width={256}
        height={211}
        className="rounded-l-lg object-cover"
      />
      <div className="bg-background rounded-r-lg w-full pl-[32px] pr-4 pt-4">
        <span className="relative flex flex-row items-center pb-3 text-xl text-color-text">
          {title}
          <button className="absolute hover:bg-color-complement/20 rounded-full right-0 p-2">
            <Trash
              className="w-6 h-6 text-others-delete"
              onClick={() => deleteItem(id)}
            />
          </button>
        </span>
        <p className="pb-[25px] text-xs text-color-text">{description}</p>
        <div className="flex flex-row w-full justify-between items-center pt-4">
          <select
            name="quantity"
            id="quantity"
            defaultValue={quantity}
            onChange={(event) => changeQuantity(event, id)}
            className="cursor-pointer hover:ring hover:ring-others-blue_low w-[65px] h-10 px-3 text-color-text rounded-lg border bg-[#F3F5F6] border-[#A8A8B3]"
          >
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
