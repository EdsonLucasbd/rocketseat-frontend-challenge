import { CaretRight } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface BreadCrumbsProps {
  infoIsFilled: boolean,
  setInfoIsFilled: Dispatch<SetStateAction<boolean>>
}

export const BreadCrumbs = ({ infoIsFilled, setInfoIsFilled }: BreadCrumbsProps) => {
  function handleChangeFilledInfo() {
    setInfoIsFilled(false)
  }

  return (
    <nav aria-label='Etapas'>
      <ol className='flex flex-row flex-wrap  items-center md:justify-center gap-1 md:gap-3 mb-6 
        md:mb-11 '>
        <li className='flex flex-row gap-1 items-center'>
          <Link href='/shoppingCart' className='text-brand-orange text-sm md:text-base'>
            Carrinho
          </Link>
          <CaretRight />
        </li>
        <li className='flex flex-row gap-1 items-center'>
          <Link
            href=''
            className={`${infoIsFilled ? ' text-brand-orange text-sm md:text-base'
              : 'text-color-text font-semibold'} transition-all ease-linear duration-200`}
            onClick={handleChangeFilledInfo}>
            Endereço
          </Link>
          <CaretRight />
        </li>
        <li className='flex flex-row gap-1 items-center'>
          <span className={`${infoIsFilled ? 'text-color-text font-semibold'
            : ' text-color-text'} transition-all ease-linear duration-200
        text-sm md:text-base`}>
            Pagamento
          </span>
        </li>
      </ol>
    </nav>
  )
}
