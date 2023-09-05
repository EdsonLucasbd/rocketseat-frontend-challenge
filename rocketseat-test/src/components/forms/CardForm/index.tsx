import { CreditCard } from '@/components/CreditCard'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cardNumberMask, validityMask } from '@/utils/masks'

type creditCardFormData = z.infer<typeof creditCardFormSchema>

const creditCardFormSchema = z.object({
  name: z.string().min(3, { message: 'Informe o nome do titular do cartão' }),
  cardNumber: z.string()
    .min(19, { message: 'Informe o número do cartão' })
    .transform((value) => value.replace(/\s+/g, '')),
  validity: z.string().min(5, { message: 'Informe a validade do cartão' }),
  cvv: z.string()
    .min(3, { message: 'Informe o código de segurança do cartão' })
    .transform((value) => Number(value))
})

export const CardForm = () => {
  const [cardData, setCardData] = useState('')
  const [flipCard, setFlipCard] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<creditCardFormData>({
    resolver: zodResolver(creditCardFormSchema)
  })

  const cardNumber = String(watch('cardNumber'))
  const cardName = watch('name')
  const cardValidity = watch('validity')
  const cardCVV = String(watch('cvv'))


  function handleCardNumberChange(event: ChangeEvent<HTMLInputElement>) {
    setValue('cardNumber', cardNumberMask(event.target.value))
  }

  function handleValidityChange(event: ChangeEvent<HTMLInputElement>) {
    setValue('validity', validityMask(event.target.value))
  }


  async function buyWithCard(data: unknown) {
    setCardData(JSON.stringify(data, null, 2))
  }

  function autoFlipCard() {
    setFlipCard(true)
  }

  function untapCard() {
    setFlipCard(false)
  }

  return (
    <div className='flex flex-col gap-y-12'>
      <form
        onSubmit={handleSubmit(buyWithCard)}
        className='flex flex-col gap-y-6'
      >
        <fieldset className='flex flex-col gap-1'>
          <label className='text-color-title' htmlFor="cardNumber">Número do cartão</label>
          <input
            className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
            type="text"
            id="cardNumber"
            maxLength={19}
            {...register('cardNumber')}
            placeholder='**** **** **** ****'
            onChange={handleCardNumberChange}
          />
          {errors.cardNumber &&
            <span className='text-sm text-others-delete font-light'>
              {errors.cardNumber.message}
            </span>
          }
        </fieldset>
        <fieldset className='flex flex-col gap-1'>
          <label className='text-color-title' htmlFor="name">Nome do Titular</label>
          <input
            className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border border-color-complement 
        outline-none focus:border-brand-orange text-color-text'
            type="text"
            id="name"
            {...register('name')}
            placeholder='Nome como está no cartão'
          />
          {errors.name &&
            <span className='text-sm text-others-delete font-light'>
              {errors.name.message}
            </span>
          }
        </fieldset>


        <div className="flex flex-row gap-4">
          <fieldset className='flex flex-col gap-1'>
            <label className='text-color-title' htmlFor="validity">Validade</label>
            <input
              className='w-[13.125rem] h-12 rounded-md p-3 bg-page-background/50 border border-color-complement 
          outline-none focus:border-brand-orange text-color-text'
              type="text"
              id="validity"
              maxLength={5}
              {...register('validity')}
              placeholder="MM/AA"
              onChange={handleValidityChange}
            />
            {errors.validity &&
              <span className='text-sm text-others-delete font-light'>
                {errors.validity.message}
              </span>
            }
          </fieldset>

          <fieldset className='flex flex-col gap-1'>
            <label className='text-color-title' htmlFor="cvv">CVV</label>
            <input
              className='w-[9.375rem] h-12 rounded-md p-3 bg-page-background/50 
                border border-color-complement outline-none 
                focus:border-brand-orange text-color-text'
              type="text"
              id="cvv"
              maxLength={3}
              {...register('cvv')}
              onFocus={autoFlipCard}
              onBlur={untapCard}
              placeholder="***"
            />
            {errors.cvv &&
              <span className='text-sm text-others-delete font-light'>
                {errors.cvv.message}
              </span>
            }
          </fieldset>
        </div>
        <button
          type='submit'
          className="flex items-center justify-center gap-3 w-full h-11 
          rounded text-background bg-brand-blue hover:bg-brand-blue/90"
        >
          Finalizar compra
        </button>
      </form>

      <div className="flex flex-col items-center justify-center">
        <CreditCard
          cardNumber={cardNumber}
          name={cardName}
          validity={cardValidity}
          cvv={cardCVV}
          isFlipped={flipCard}
        />
        <div className='flex items-center gap-2'>
          <Image
            src='/shield.svg'
            width={15}
            height={15}
            alt="Ícone de um escudo, representando a segurança dos dados"
          />
          <span className="text-color-text">Seus dados estão seguros</span>
        </div>
      </div>
    </div>

  )
}
