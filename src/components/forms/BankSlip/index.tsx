import React from 'react'

interface BankSlipProps {
  value: string
}

export const BankSlip = ({ value }: BankSlipProps) => {
  return (
    <div className='flex flex-col gap-4 p-3 md:p-6 bg-page-background rounded-lg 
      border w-full md:w-[23.4375rem] dark:bg-dark-900 dark:border-dark-400'
    >
      <p className='font-medium text-color-text dark:text-dark-300 text-start'>Informações sobre o pagamento via boleto:</p>
      <div className='list-disc'>
        <li className='text-color-text dark:text-dark-300 font-light'>Valor à vista: <b>R$ {value}</b>.</li>
        <li className='text-color-text dark:text-dark-300 font-light'>Não podemos parcelar o Boleto.</li>
        <li className='text-color-text dark:text-dark-300 font-light'>Pode levar até 2 dias úteis para compensar.</li>
      </div>
      <button
        className="flex items-center justify-center gap-3 w-full h-11 
          rounded text-background bg-brand-blue hover:bg-brand-blue/90
          dark:text-dark-300 dark:bg-dark-400 dark:hover:bg-dark-800"
      >
        Finalizar compra
      </button>
    </div>
  )
}
