import { RadioGroup } from '@/components/RadioGroup'
import React, { Dispatch, SetStateAction } from 'react'
import { CardForm } from '../CardForm'
import { BankSlip } from '../BankSlip'
import { PixForm } from '../PixForm'
import { Methods } from '../Methods'

interface PaymentFormProps {
  method: string,
  setMethod: Dispatch<SetStateAction<string>>
}

export const PaymentForm = ({ method, setMethod }: PaymentFormProps) => {
  return (
    <>
      <form defaultValue={method} className='flex flex-col gap-4 mb-6'>
        <label htmlFor="payment-methods" className='text-color-text text-lg font-medium'>Pague com:</label>
        <fieldset id='payment-methods' className='flex flex-row gap-2 md:gap-5'>
          <RadioGroup
            label='Cartão de crédito'
            value='card'
            onChange={event => setMethod(event.target.value)}
            id='card'
            checked={method === 'card'}
          />
          <RadioGroup
            label='Boleto'
            value='bank-slip'
            onChange={event => setMethod(event.target.value)}
            id='bank-slip'
            checked={method === 'bank-slip'}
          />
          <RadioGroup
            label='Pix'
            value='pix'
            onChange={event => setMethod(event.target.value)}
            id='pix'
            checked={method === 'pix'}
          />
        </fieldset>
      </form>
      <Methods method={method} />
    </>
  )
}
