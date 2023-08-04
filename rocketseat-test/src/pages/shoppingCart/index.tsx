import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { Suspense, useContext, useEffect, useState } from "react";
import { IStoredItem } from "../product/[id]";
import { ProductInBag } from "@/components/ProductInBag";
import { CartContext } from "../../../context/CartContext";
import { EmptyCart } from "@/components/EmptyCart";

export default function ShoppingCart() {
  const router = useRouter()
  const [items, setItens] = useState<IStoredItem[]>()
  const [amount, setAmount] = useState(0)
  const [removedItems, setRemovedItems] = useState(0)

  const { getCart, getTotal, removeItemFromCart, updateItemQuantity } = useContext(CartContext)

  function getItems() {
    const storedItens = getCart()
    const amountValue = getTotal()
    setItens(storedItens)
    setAmount(amountValue)
  }

  async function handleRemoveItem(itemId: string) {
    await removeItemFromCart(itemId).then(() => {
      setRemovedItems((prev) => prev + 1)
    })
  }

  async function handleSelect(event: React.ChangeEvent<HTMLSelectElement>, id: string) {
    const selectedValue = parseInt(event.target.value);
    await updateItemQuantity(id, selectedValue)
  };

  useEffect(() => {
    getItems()
  }, [])

  useEffect(() => {
    getItems()
  }, [removedItems, handleSelect])

  return (
    <div className={`flex flex-col ${items?.length! > 2 ? 'h-full' : 'h-screen'}`}>
      <button
        onClick={() => router.back()}
        className="flex items-center w-[85px] gap-2 font-medium text-color-text 
        text-sm mt-[25px] mb-[22px] hover:ring-2 hover:ring-color-text hover:rounded-full p-1"
      >
        <ArrowCircleLeft className="w-6 h-6" />
        Voltar
      </button>
      <div className="flex flex-row gap-8">
        <div>
          <p className="font-medium text-2xl text-color-text">Seu carrinho</p>
          <p className="mt-[6px] font-light">{`Total (${items?.length} produtos)`} <span className="font-semibold">{`R$${amount}`}</span></p>
          <div className="flex flex-col gap-4 mt-6">
            {items?.length !== 0 ?
              (
                items?.map((item) => (
                  <ProductInBag
                    key={item.id}
                    id={item.id}
                    image={item.image_url}
                    title={item.name}
                    description={item.description}
                    value={item.price}
                    quantity={item.quantity}
                    deleteItem={() => handleRemoveItem(item.id)}
                    changeQuantity={(event) => handleSelect(event, item.id)}
                  />
                ))
              ) : (
                <EmptyCart />
              )
            }
          </div>
        </div>
        <div className="fixed flex flex-col w-[352px] min-h-[500px] right-40 bg-background px-6 pt-4 pb-6 shadow-md">
          <p className="font-semibold text-xl text-color-text">Resumo do pedido</p>
          <div>
            <div className="flex flex-col gap-3 pb-6 pt-[29px] text-color-text">
              <span className="flex flex-row items-center justify-between">
                <p>Subtotal de produtos</p>
                <Suspense fallback={<span>Calculando...</span>}>
                  <p>R$ {amount}</p>
                </Suspense>
              </span>
              <span className="flex flex-row items-center justify-between">
                <p>Entrega</p>
                <p>R$ 40,00</p>
              </span>
            </div>
            <hr />
            <span className="flex flex-row items-center justify-between pt-2 pb-10 font-semibold text-base">
              <Suspense fallback={<span>Calculando...</span>}>
                <p>Total</p>
                <p>R$ {(amount + 40).toFixed(2)}</p>
              </Suspense>
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
