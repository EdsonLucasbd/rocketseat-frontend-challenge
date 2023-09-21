import Image from 'next/image'
import React from 'react'

interface PixProps {
  value: string
}

export const PixForm = ({ value }: PixProps) => {
  return (
    <div className="flex flex-col md:items-center gap-4 p-3 bg-page-background rounded-lg 
    border w-full md:w-[23.4375rem] dark:bg-dark-900 dark:border-dark-400">
      <>
        <p className='font-medium text-color-text dark:text-dark-300 md:text-start'>Informações sobre o pagamento via Pix:</p>
        <ul className='list-disc'>
          <li className='text-color-text dark:text-dark-300 font-light list-inside'>Valor à vista: <b>R$ {value}</b>.</li>
          <li className='text-color-text dark:text-dark-300 font-light list-inside'>Não podemos parcelar o Pix.</li>
          <li className='text-color-text dark:text-dark-300 font-light list-inside'>Pagamento consta imediatamente.</li>
        </ul>
      </>
      <div className="bg-white self-center w-fit md:w-auto p-4 shadow-md rounded-lg">
        <Image src='https://api.qrserver.com/v1/create-qr-code/?data=http://bit.ly/Lucas_github&amp;size=250x250;format=svg'
          alt='fake qr code, caso decida ler, será direcionado para o meu perfil no github'
          width={250}
          height={250} />
      </div>
    </div>
  )
}
