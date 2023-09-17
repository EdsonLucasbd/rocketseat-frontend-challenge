import { CheckoutPanel } from '@/components/CheckoutPanel'
import Head from 'next/head'

export default function Checkout() {
  return (
    <>
      <Head>
        <title>E.L store | Checkout</title>
      </Head>
      <div className="h-screen md:h-full flex flex-col-reverse md:flex-col py-10
        md:py-20 justify-center my-[110%] md:my-0">
        <CheckoutPanel />
        <p className='text-xs mt-4 text-red-600'>
          * Atenção! Este é um site fictício, as formas de pagamento presentes são
          meramente ilustrativas e nenhuma informação é salva ou enviada para um
          servidor remoto, porém não é recomendado que forneça informações
          reais de cartão de crédito.
        </p>
      </div>
    </>
  )
}
