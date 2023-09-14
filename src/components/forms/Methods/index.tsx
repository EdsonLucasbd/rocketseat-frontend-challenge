import { useContext } from 'react'
import { CardForm } from '../CardForm'
import { BankSlip } from '../BankSlip'
import { PixForm } from '../PixForm'
import { CartContext } from '../../../../context/CartContext'

export const Methods = ({ method }: { method: string }) => {
  const { getTotal } = useContext(CartContext)

  const amount = getTotal()

  return (
    method === 'card' ? (
      <CardForm />
    ) : method === 'bank-slip' ? (
      <BankSlip value={amount.toString()} />
    ) : <PixForm value={amount.toString()} />
  )
}
