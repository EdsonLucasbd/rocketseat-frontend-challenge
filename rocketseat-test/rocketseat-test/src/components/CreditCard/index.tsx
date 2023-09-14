import Image from 'next/image'
import React, { useEffect, useState } from 'react'
interface CreditCardProps {
  name: string,
  cardNumber: string,
  validity: string,
  cvv: string,
  isFlipped?: boolean
}

export const CreditCard = ({ cardNumber, name, validity, cvv, isFlipped }: CreditCardProps) => {
  const [flag, setFlag] = useState('')
  const formattedNumber = cardNumber
    .replace(/\s+/g, '')
    .replace(/\D/g, '')
    .padEnd(16, '*')

  const normalFourSecondDigits = formattedNumber.substring(4, 8)
  const normalFourThirdNumber = formattedNumber.substring(8, 12)

  const fourFirstDigits = formattedNumber.substring(0, 4)
  const fourSecondDigits = normalFourSecondDigits.replace(/(?<=\d)(\d{3})(?=\s|$)/g, (group) => group.replace(/\d/g, '*'))
  const fourThirdNumber = normalFourThirdNumber.substring(0, 4).replace(/\d/g, '*')
  const fourLastNumber = formattedNumber.substring(12, 16)

  const formattedCVV = cvv.replace(/\s+/g, '').replace(/\D/g, '').padEnd(3, '*')

  function defineCarditFlag() {
    const firstNumber = fourFirstDigits.substring(0, 1)
    if (firstNumber !== '') {
      if (firstNumber === '4') {
        setFlag('visa')
      } else if (firstNumber === '5') {
        setFlag('master')
      } else if (firstNumber === '6') {
        setFlag('elo')
      }
    }
  }

  useEffect(() => {
    defineCarditFlag()
  }, [cardNumber])

  return (
    <div className="group  w-[330px] h-[210px] [perspective:60rem]">
      <div className={`absolute left-0 top-0 z-50 bg-card-front flex flex-col justify-end gap-4 p-12  w-full h-full bg-no-repeat
        transition-all duration-500 [backface-visibility:hidden] 
        [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
        ${isFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0)]'} `}
      >

        {flag !== '' &&
          <Image
            className='relative bottom-9'
            src={`/${flag}-flag.svg`}
            width={32}
            height={32}
            alt=''
            aria-hidden
          />
        }
        <div className="relative flex w-full items-center justify-between tracking-[.25em] text-[#F9FAFB] text-sm">
          <span>{fourFirstDigits}</span>
          <span>{fourSecondDigits}</span>
          <span>{fourThirdNumber}</span>
          <span>{fourLastNumber}</span>
        </div>

        <div className="flex items-center justify-between text-[#F9FAFB]">
          <span className='text-sm'>{name || 'Seu nome aqui'}</span>
          <span className="tracking-[.25em] text-sm">
            {validity || 'MM/AA'}
          </span>
        </div>

      </div>
      <div
        className={`absolute left-0 top-0 z-50 bg-card-back flex h-full w-full 
          items-end bg-no-repeat px-6 pb-11 transition-all duration-500 
          [backface-visibility:hidden] [transform-style:preserve-3d] 
          group-hover:[transform:rotateY(0)]
        ${isFlipped ? '[transform:rotateY(0)]' : '[transform:rotateY(-180deg)]'}
        `}
      >
        <span
          className="text-[#717781] text-sm relative left-[64%] bottom-[2.625rem]">
          {formattedCVV}
        </span>
      </div>

    </div>
  )
}
