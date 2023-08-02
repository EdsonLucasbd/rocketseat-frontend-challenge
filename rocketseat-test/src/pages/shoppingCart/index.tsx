import { ArrowCircleLeft } from "@phosphor-icons/react";
import localforage from "localforage";
import { useRouter } from "next/router";
import { Suspense, useContext, useEffect, useState } from "react";
import { IStoredItem } from "../product/[id]";
import { ProductInBag } from "@/components/ProductInBag";
import { CartContext } from "../../../context/CartContext";

export default function ShoppingCart() {
  const router = useRouter()
  const [items, setItens] = useState<IStoredItem[]>()
  const [amount, setAmount] = useState(0)

  const { getCart, getTotal } = useContext(CartContext)

  console.log('itens', items)

  function getItens() {
    const storedItens = getCart()
    const amountValue = getTotal()
    setItens(storedItens)
    setAmount(amountValue)
  }

  useEffect(() => {
    getItens()
  }, [])

  return (
    <div className="flex flex-col">
      <button
        onClick={() => router.back()}
        className="flex items-center w-[71px] gap-2 font-medium text-texts-text text-sm mt-[25px] mb-[22px]"
      >
        <ArrowCircleLeft className="w-6 h-6" />
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
                id={item.id}
                image={item.image_url}
                title={item.name}
                description={item.description}
                value={item.price}
                quantity={item.quantity}
              />
            )
            )}
          </div>
        </div>
        <div className="flex flex-col w-[352px] bg-background px-6 pt-4 pb-6">
          <p className="font-semibold text-xl">Resumo do pedido</p>
          <div>
            <div className="flex flex-col gap-3 pb-6 pt-[29px]">
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
