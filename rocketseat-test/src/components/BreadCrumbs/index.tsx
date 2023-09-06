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
    <span className='flex flex-row items-center justify-center gap-3 mb-11'>
      <Link href='/shoppingCart' className='text-brand-orange font-light'>Carrinho</Link>
      <Image src='/breadcrumb-icon-orange.svg' width={60} height={24} alt='' aria-hidden />
      <Link
        href=''
        className={`${infoIsFilled ? ' text-brand-orange font-light'
          : 'text-color-text font-semibold'} transition-all ease-linear duration-200`}
        onClick={handleChangeFilledInfo}>Endereço</Link>
      {
        infoIsFilled ? (
          <Image src='/breadcrumb-icon-orange.svg' width={60} height={24} alt='' aria-hidden />
        ) : (
          <Image src='/breadcrumb-icon-normal.svg' width={60} height={24} alt='' aria-hidden />
        )
      }
      <span className={`${infoIsFilled ? 'text-color-text font-semibold'
        : ' text-color-text font-light'} transition-all ease-linear duration-200`}>Pagamento</span>
    </span>
  )
}
