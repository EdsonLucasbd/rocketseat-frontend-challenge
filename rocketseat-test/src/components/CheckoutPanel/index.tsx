import Image from 'next/image'
import { useState } from 'react'
import { RadioGroup } from '../RadioGroup'
import { PixForm } from '../forms/PixForm'
import { CardForm } from '../forms/CardForm'
import { TransferForm } from '../forms/PixForm/TransferForm'

export const CheckoutPanel = () => {
  const [payment, setPayment] = useState('card')

  return (
    <div className='flex flex-col justify-between w-2/5 px-11 py-9 bg-background rounded-lg'>
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
              label='Transferência'
              value='bank-transfer'
              onChange={event => setPayment(event.target.value)}
              id='bank-transfer'
              checked={payment === 'bank-transfer'}
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
        ) : payment === 'bank-transfer' ? (
          <TransferForm />
        ) : <PixForm />}
      </div>
    </div>
  )
}
