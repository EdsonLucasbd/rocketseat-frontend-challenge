import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { RadioGroup } from '../RadioGroup'
import { PixForm } from '../forms/PixForm'
import { CardForm } from '../forms/CardForm'
import { BankSlip } from '../forms/BankSlip'
import { IStoredItem } from '@/pages/product/[id]'
import { CartContext } from '../../../context/CartContext'

export const CheckoutPanel = () => {
  const [payment, setPayment] = useState('card')
  const [items, setItems] = useState<IStoredItem[]>()
  const [amount, setAmount] = useState(0)

  const { getCart, getTotal } = useContext(CartContext)

  useEffect(() => {
    const storedItens = getCart()
    const amount = getTotal()
    setItems(storedItens)
    setAmount(amount)
  }, [])

  return (
    <div className="flex flex-row gap-4">
      <div className='flex flex-col space-y-0 w-2/5 px-11 py-9 bg-background rounded-lg'>
        <span className='flex flex-row items-start gap-3 mb-11'>
          <span className='text-brand-orange font-light'>Carrinho</span>
          <Image src='/breadcrumb-icon.svg' width={96} height={24} alt='' aria-hidden />
          <span className='font-semibold text-color-text'>Pagamento</span>
        </span>
        <div className='flex flex-col justify-between'>
          <form defaultValue={payment} className='flex flex-col gap-4 mb-6'>
            <label htmlFor="payment-methods" className='text-color-text text-lg font-medium'>Pague com:</label>
            <fieldset id='payment-methods' className='flex flex-row gap-5'>
              <RadioGroup
                label='Cartão de crédito'
                value='card'
                onChange={event => setPayment(event.target.value)}
                id='card'
                checked={payment === 'card'}
              />
              <RadioGroup
                label='Boleto'
                value='bank-slip'
                onChange={event => setPayment(event.target.value)}
                id='bank-slip'
                checked={payment === 'bank-slip'}
              />
              <RadioGroup
                label='Pix'
                value='pix'
                onChange={event => setPayment(event.target.value)}
                id='pix'
                checked={payment === 'pix'}
              />
            </fieldset>
          </form>

          {payment === 'card' ? (
            <CardForm />
          ) : payment === 'bank-slip' ? (
            <BankSlip value={amount.toString()} />
          ) : <PixForm />}
        </div>
      </div>
      <div className="flex flex-col w-full px-11 py-9 
        bg-shapes-02 rounded-lg divide-y divide-dashed divide-zinc-400">
        {items?.map(item => (
          <div className="flex flex-row gap-4 py-5 first:pt-0 last:pb-0">
            <Image
              src={item.image_url}
              alt=''
              width={150}
              height={150}
              className='rounded-md shadow-md'
            />
            <p className='font-medium text-color-title'>{item.name}</p>
          </div>
        ))
        }
      </div>
    </div>

  )
}
