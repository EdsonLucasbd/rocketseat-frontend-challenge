import { saira, abril } from '@/utils/fonts';
import { ShoppingBagOpen } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { ItemSearchForm } from './ItemSearchForm';

const Header = ({ children }: { children: React.ReactNode }) => {
  const [itemsInShoppingCart, setItemsInShoppingCart] = useState(0)
  const router = useRouter()
  const { getCart } = useContext(CartContext)
  const totalItems = getCart().length

  useEffect(() => {
    setItemsInShoppingCart(totalItems)
  }, [totalItems])

  return (
    <div className='flex flex-col'>
      <header className='flex items-center justify-between w-full h-20
      bg-shapes-01 px-7 md:px-40'>
        <Link
          href={'/'}
          aria-label='voltar para a página inicial'
          className={`${router.asPath === '/' ? 'pointer-events-none' : ''}`}
        >
          <Image src='/logo.png' aria-hidden width={155} height={65} alt='' />
        </Link>
        <div className='flex flex-row gap-6'>
          <ItemSearchForm />
          <span className='relative inline-flex'>
            <button>
              <ShoppingBagOpen
                className='w-6 h-6 text-color-text'
                alt='buscar'
                onClick={() => router.push('/shoppingCart')}
              />
            </button>
            <span className={`absolute ${saira} font-saira w-[1.0625rem] h-[1.0625rem] -bottom-2 right-0 inline-flex items-center justify-center p-[.3125rem] text-[.625rem] font-medium leading-none text-shapes-01 transform translate-x-1/2 -translate-y-1/2 bg-others-delete rounded-full`}>{itemsInShoppingCart}</span>
          </span>
        </div>
      </header>
      <main className={`${saira} font-saira w-full h-full bg-page-background 
        px-7 md:px-40 pb-[3.75rem] overflow-x-hidden`}>
        {children}
      </main>
    </div>
  )
}

export default Header;