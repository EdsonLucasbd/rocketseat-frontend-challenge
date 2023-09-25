import { ArrowCircleLeft } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { IStoredItem } from "../product/[id]";
import { ProductInBag } from "@/components/ProductInBag";
import { CartContext } from "../../../context/CartContext";
import { EmptyCart } from "@/components/EmptyCart";
import Head from "next/head";

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
  }

  function handleCheckout() {
    router.push('/checkout')
  }

  useEffect(() => {
    getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [removedItems, handleSelect])

  return (
    <>
      <Head>
        <title>E.L store | Seu Carrinho</title>
      </Head>
      <div className={`flex flex-col ${items?.length! > 2 ? 'h-full' : 'h-screen'}`}>
        <button
          onClick={() => router.back()}
          className="flex items-center w-[85px] gap-2 font-medium text-color-text 
        text-sm mb-[22px] hover:ring-2 hover:ring-color-text hover:rounded-full p-1
        dark:text-dark-300 dark:hover:ring-dark-300"
        >
          <ArrowCircleLeft className="w-6 h-6" />
          Voltar
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div>
            <p className="font-medium text-2xl text-color-text dark:text-dark-200">Seu carrinho</p>
            <p className="mt-[6px] font-light dark:text-dark-200">{`Total (${items?.length} produtos)`}
              <span className="font-semibold">{` R$${amount}`}</span>
            </p>
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
          <div className="md:fixed flex flex-col w-full md:w-[352px] min-h-[500px] 
            right-40 bg-background px-6 pt-4 pb-6 mb-10 md:mb-0 shadow-md animate-fade-in-right
            dark:bg-dark-700">
            <p className="font-semibold text-xl text-color-text dark:text-dark-300">Resumo do pedido</p>
            <div>
              <div className="flex flex-col gap-3 pb-6 pt-[29px] text-color-text dark:text-dark-300">
                <span className="flex flex-row items-center justify-between">
                  <p className="dark:text-dark-300">Subtotal de produtos</p>
                  <p className="dark:text-dark-300">R$ {amount}</p>
                </span>
                <span className="flex flex-row items-center justify-between">
                  <p className="dark:text-dark-300">Entrega</p>
                  <p className="dark:text-dark-300">R$ 40,00</p>
                </span>
              </div>
              <hr />
              <span className="flex flex-row items-center justify-between pt-2 pb-10 font-semibold text-base">
                <p className="dark:text-dark-300">Total</p>
                <p className="dark:text-dark-200">R$ {(amount + 40).toFixed(2)}</p>
              </span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={items?.length === 0}
              className="bg-others-green text-background hover:bg-green-600 
                disabled:bg-color-text disabled:cursor-not-allowed w-full h-11 rounded
                dark:bg-dark-400 dark:disabled:bg-dark-300/30 dark:hover:bg-dark-800 dark:text-dark-200"
            >
              Finalizar a compra
            </button>
            <div className="mt-auto flex flex-col gap-3 text-sm font-medium text-[#737380]">
              <p className="border-b border-b-[#737380]/50 w-fit dark:text-dark-300">Ajuda</p>
              <p className="border-b border-b-[#737380]/50 w-fit dark:text-dark-300">Reembolsos</p>
              <p className="border-b border-b-[#737380]/50 w-fit dark:text-dark-300">Entregas e frete</p>
              <p className="border-b border-b-[#737380]/50 w-fit dark:text-dark-300">Trocas e devoluções</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
