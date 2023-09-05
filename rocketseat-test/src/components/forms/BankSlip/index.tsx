import React from 'react'

interface BankSlipProps {
  value: string
}

export const BankSlip = ({ value }: BankSlipProps) => {
  return (
    <div className='flex flex-col items-center gap-4 p-6 bg-page-background rounded-lg 
      border w-[23.4375rem]'
    >
      <p className='font-medium text-color-text text-start'>Informações sobre o pagamento via boleto:</p>
      <div className='list-disc'>
        <li className='text-color-text font-light'>Valor à vista: <b>R$ {value}</b>.</li>
        <li className='text-color-text font-light'>Não podemos parcelar o Boleto.</li>
        <li className='text-color-text font-light'>Pode levar até 2 dias úteis para compensar.</li>
      </div>
      <button
        className="flex items-center justify-center gap-3 w-full h-11 
          rounded text-background bg-brand-blue hover:bg-brand-blue/90"
      >
        Finalizar compra
      </button>
    </div>
  )
}
