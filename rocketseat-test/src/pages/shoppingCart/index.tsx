import { ArrowCircleLeft } from "@phosphor-icons/react";
import localforage from "localforage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IStoredItem } from "../product/[id]";
import { ProductInBag } from "@/components/ProductInBag";

export default function ShoppingCart() {
  const router = useRouter()
  const [items, setItens] = useState<IStoredItem[]>()
  const [amount, setAmount] = useState(0)
  const [duplicatedItems, setDuplicatedItems] = useState<{[key: string]: any}>()

  async function getItens() {
    const storedItens = await localforage.getItem<IStoredItem[]>('shoppingCart') || []
    setItens(storedItens)
    const amountValue = storedItens.reduce((total, item) => Number((total + item.price).toFixed(2)), 0)
    setAmount(amountValue)
  }

  function checkDuplicatedItems(arr: IStoredItem[] | undefined) {
    const itemOccurences: {[key: string]: number} = {}
    
    arr?.forEach(currentItem => {
      arr.forEach(nextItem => {
        if(currentItem.id !== nextItem.id && currentItem.name === nextItem.name) {
          itemOccurences[currentItem.name] = (itemOccurences[currentItem.name] || 0) + 1
        }
      })
    })

    const duplicatedItems = Object.keys(itemOccurences)
      .filter(name => itemOccurences[name] > 1)
      .map(name => ({name, quantity: itemOccurences[name]}))
      
    setDuplicatedItems(duplicatedItems)
  }

  useEffect(() => {
    getItens()
    checkDuplicatedItems(items)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col">
      <button 
        onClick={() => router.back()}
        className="flex items-center w-[71px] gap-2 font-medium text-texts-text text-sm mt-[25px] mb-[22px]"
      >
        <ArrowCircleLeft className="w-6 h-6"/>
        Voltar
      </button>
      <div className="flex flex-row gap-8">
        <div>
          <p>Seu carrinho</p>
          <p className="mt-[6px]">{`Total (${items?.length} produtos) R$${amount}`}</p>
         <div className="flex flex-col gap-4 mt-6">
          {items?.map((item) => (
            <ProductInBag 
              key={item.id}  
              image={item.image_url}
              title={item.name}
              description={item.description}
              value={item.price}
              quantity={1}
            />
          ))}
         </div>
        </div>
        <div className="flex flex-col w-[352px] bg-background px-6 pt-4 pb-6">
          <p className="font-semibold text-xl">Resumo do pedido</p>
          <div>
            <div className="flex flex-col gap-3 pb-6 pt-[29px]">
              <span className="flex flex-row items-center justify-between">
                <p>Subtotal de produtos</p>
                <p>R$ {amount}</p>
              </span>
              <span className="flex flex-row items-center justify-between">
                <p>Entrega</p>
                <p>R$ 40,00</p>
              </span>
            </div>
            <hr />
            <span className="flex flex-row items-center justify-between pt-2 pb-10 font-semibold text-base">
              <p>Total</p>
              <p>R$ {(amount + 40).toFixed(2)}</p>
            </span>
          </div>
          <button className="bg-others-green text-background w-full h-11 rounded">Finalizar a compra</button>
          <div className="mt-auto flex flex-col gap-3 text-sm font-medium text-[#737380]">
            <p className="border-b border-b-[#737380]/50 w-fit">Ajuda</p>
            <p className="border-b border-b-[#737380]/50 w-fit">Reembolsos</p>
            <p className="border-b border-b-[#737380]/50 w-fit">Entregas e frete</p>
            <p className="border-b border-b-[#737380]/50 w-fit">Trocas e devoluções</p>
          </div>
        </div>
      </div>
    </div>
  );
}
