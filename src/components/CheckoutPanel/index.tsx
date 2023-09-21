import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { IStoredItem } from '@/pages/product/[id]'
import { CartContext } from '../../../context/CartContext'
import { PersonalInfoForm } from '../forms/InfoForm'
import { PaymentForm } from '../forms/PaymentForm'
import { BreadCrumbs } from '../BreadCrumbs'

export const CheckoutPanel = () => {
  const [payment, setPayment] = useState('card')
  const [items, setItems] = useState<IStoredItem[]>()
  const [amount, setAmount] = useState(0)
  const [showPayments, setShowPayments] = useState(false)

  const { getCart, getTotal } = useContext(CartContext)

  function handleFormASubmit() {
    setShowPayments(true);
  };

  useEffect(() => {
    const storedItens = getCart()
    const amount = getTotal()
    setItems(storedItens)
    setAmount(amount)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className='flex flex-col space-y-0 w-full md:w-2/5 px-5 py-7 md:px-11 
        animate-fade-in-left md:py-9 bg-background dark:bg-dark-700 rounded-lg shadow-md'>
        <BreadCrumbs infoIsFilled={showPayments} setInfoIsFilled={setShowPayments} />
        <div className='flex flex-col justify-between'>
          {showPayments ? (
            <PaymentForm method={payment} setMethod={setPayment} />
          ) : (
            <PersonalInfoForm onSubmit={handleFormASubmit} />
          )}
        </div>
      </div>
      <aside className="flex flex-col w-full px-11 py-9 mt-5 md:mt-0
        bg-shapes-02 rounded-lg divide-y divide-dashed divide-zinc-400
        animate-fade-in-right shadow-md dark:bg-dark-400 dark:divide-dark-300">
        {items?.map(item => (
          <div key={item.id} className="flex flex-row gap-4 py-5 first:pt-0 last:pb-0">
            <div className="relative ">
              <Image
                src={item.image_url}
                alt=''
                width={150}
                height={150}
                className='rounded-md shadow-md'
              />
              <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-color-title 
                text-white -top-2 -right-2 dark:bg-dark-300 dark:text-dark-100">
                {item.quantity}
              </span>
            </div>
            <div className="flex flex-col md:flex-row w-full items-start justify-between">
              <p className='font-medium  text-color-title dark:text-dark-200'>{item.name}</p>
              <p className='dark:text-dark-300'>R${item.price}</p>
            </div>
          </div>
        ))
        }
        <div className="flex flex-col pt-5">
          <div className="flex flex-row items-center justify-between">
            <p className='dark:text-dark-300'>Subtotal</p>
            <p className='font-medium dark:text-dark-300'>R${(amount - Number(40)).toFixed(2)}</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className='dark:text-dark-300'>Entrega</p>
            <p className='font-light dark:text-dark-300'>R$40,00</p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <p className='dark:text-dark-300'>Total</p>
            <p className='font-medium text-lg dark:text-dark-200'>R${amount}</p>
          </div>
        </div>
      </aside>
    </div>

  )
}
