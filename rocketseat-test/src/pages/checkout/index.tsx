import { CheckoutPanel } from '@/components/CheckoutPanel'

export default function Checkout() {
  return (
    <div className=" h-full py-20">
      <div className="flex flex-row">
        <span className='flex items-center justify-center w-6 h-6 rounded-full 
        bg-shapes-02 mb-4 cursor-pointer group'>
          ?
        </span>
        <p>
          Este é um site fictício, as formas de pagamento presentes são
          meramente ilustrativas e nenhuma informação é salva ou enviada para um
          servidor remoto, porém não é recomendado que forneça informações
          reais de cartão de crédito.
        </p>
      </div>
      <CheckoutPanel />
    </div>
  )
}
