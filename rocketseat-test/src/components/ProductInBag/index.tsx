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
}

export const ProductInBag = ({ id, image, title, description, value, quantity }: ProductInBagProps) => {
  const totalLimit = Array.from({ length: 10 }, (_, index) => index + 1)
  const hiddenItem: { 'id': string }[] = []

  const { cart, getCart, removeItemFromCart, updateItemQuantity } = useContext(CartContext)

  async function checkItems(itemId: string) {
    const items = getCart()
    items.map((item) => item.id === itemId && quantity++)

    console.log('quantidade', quantity)
  }

  async function deleteItem(itemId: string) {
    removeItemFromCart(itemId)
    hiddenItem.push({ 'id': itemId })
    // const items = await localforage.getItem<IStoredItem[]>('cart') || []
    // const index = items.findIndex(item => item.id === itemId)
    // if (index !== -1) {
    //   items.splice(index, 1)
    //   await localforage.setItem('shoppingCart', items)

    //   hiddenItem.push({ 'id': itemId })
    // }

    console.log(hiddenItem)
  }

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value);
    updateItemQuantity(id, selectedValue)
  };

  return (
    <div className="flex flex-row w-full h-[13.1875rem] max-w-[46rem]">
      <Image
        src={image}
        alt=''
        aria-hidden
        width={256}
        height={211}
        className="rounded-l-lg object-cover"
      />
      <div className="bg-background rounded-r-lg w-full pl-[32px] pr-4 pt-4">
        <span className="flex flex-row justify-between items-center pb-3 text-xl text-color-text">
          {title}
          <button className="">
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
            onChange={handleSelect}
            className="w-[65px] h-10 px-3 text-color-text rounded-lg border bg-[#F3F5F6] border-[#A8A8B3]"
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
