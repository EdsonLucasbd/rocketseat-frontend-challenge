import { ShoppingBagOpen } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-8 mt-10 w-full md:w-[46rem]'>
      <Image
        src={'/EmptyShopCart.svg'}
        width={497}
        height={45}
        alt=''
        className='opacity-50'
      />
      <p className='font-semibold text-xl text-color-text'>Seu carrinho está vazio</p>
      <Link href='/' className="flex items-center justify-center gap-3 w-1/2 h-11 rounded text-background bg-brand-blue
      hover:bg-brand-blue/90"
      >
        <ShoppingBagOpen className="w-6 h-6" />
        Continuar comprando
      </Link>
    </div>
  )
}
