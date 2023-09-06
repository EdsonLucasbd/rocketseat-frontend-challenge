import React, { ChangeEvent, useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import cep from 'cep-promise'
import { zipCodeMask } from '@/utils/masks'

type personalInfoFormData = z.infer<typeof personalInfoFormSchema>

const personalInfoFormSchema = z.object({
  mail: z.string().email({ message: 'Informe um email válido' }),
  address: z.string().min(5, { message: 'Informe um endereço válido' }),
  neighborhood: z.string().min(5, { message: 'Informe um bairro válido' }),
  houseNumber: z.string().min(2, { message: 'Informe o número da residência' })
    .regex(/^[0-9]+$/, { message: 'Informe apenas números' }),
  city: z.string().min(5, { message: 'Informe o nome da cidade' }),
  state: z.string(),
  zipCode: z.string().min(8, { message: 'Informe um CEP válido' })
    .transform((val) => val.replace('-', ''))
})

interface PersonalInfoFormProps {
  onSubmit: () => void;
}

export const PersonalInfoForm = ({ onSubmit }: PersonalInfoFormProps) => {
  const [isFilled, setIsFilled] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch
  } = useForm<personalInfoFormData>({
    resolver: zodResolver(personalInfoFormSchema),
    mode: 'onBlur'
  })

  const zipCode = String(watch('zipCode'))
  const state = String(watch('state'))
  const address = String(watch('address'))
  const city = String(watch('city'))
  const houseNumber = String(watch('houseNumber'))
  const mail = String(watch('mail'))
  const neighborhood = String(watch('neighborhood'))

  function handleZipCodeChange(event: ChangeEvent<HTMLInputElement>) {
    const value = zipCodeMask(event.target.value)
    setValue('zipCode', value, { shouldTouch: true })
    validateForm()
  }

  function fetchCompletAddress() {
    zipCode.length > 8 ? (
      cep(zipCode, { timeout: 5000 }).then(result => {
        const { city, neighborhood, state, street } = result

        setValue('city', city)
        setValue('neighborhood', neighborhood)
        setValue('address', street)
        setValue('state', state)
      })
    ) : (
      setValue('city', ''),
      setValue('neighborhood', ''),
      setValue('address', ''),
      setValue('state', '')
    )
  }

  function continueToPayment(data: unknown) {
    onSubmit()
    console.log('dados do cartão', data)
  }

  function validateForm() {
    const isFilled = zipCode !== '' && state !== '' && address !== '' &&
      city !== '' && houseNumber !== '' && mail !== '' && neighborhood !== '';
    setIsFilled(isFilled);
  }

  useEffect(() => {
    fetchCompletAddress()
  }, [zipCode])

  return (
    <form className='flex flex-col gap-y-6' onSubmit={handleSubmit(continueToPayment)}>
      <fieldset className='flex flex-col gap-1'>
        <label className='text-color-title' htmlFor="contact">Contato</label>
        <input
          className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
          type="text"
          id="contact"
          {...register('mail')}
          placeholder='Informe seu melhor email'
          onChange={validateForm}
        />
        {errors.mail &&
          <span className='text-sm text-others-delete font-light'>
            {errors.mail.message}
          </span>
        }
      </fieldset>
      <fieldset className='flex flex-col gap-1'>
        <label className='text-color-title' htmlFor="name">Nome</label>
        <input
          className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
          type="text"
          id="name"
          placeholder='Nome completo (opcional)'
        />
      </fieldset>
      <fieldset className='flex flex-col gap-1'>
        <label className='text-color-title' htmlFor="address">Endereço para envio</label>
        <input
          className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
          type="text"
          id="address"
          {...register('address')}
          placeholder='Endereço'
          onChange={validateForm}
        />
        {errors.address &&
          <span className='text-sm text-others-delete font-light'>
            {errors.address.message}
          </span>
        }
      </fieldset>
      <div className="flex flex-row justify-between">
        <fieldset className='flex flex-col gap-1'>
          <label className='text-color-title' htmlFor="neighborhood">Bairro</label>
          <input
            className='w-full h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
            type="text"
            id="neighborhood"
            {...register('neighborhood')}
            placeholder='Bairro'
            onChange={validateForm}
          />
          {errors.neighborhood &&
            <span className='text-sm text-others-delete font-light'>
              {errors.neighborhood.message}
            </span>
          }
        </fieldset>
        <fieldset className='flex flex-col gap-1 w-[6.25rem]'>
          <label className='text-color-title' htmlFor="number">Número</label>
          <input
            className='w-full h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
            type="text"
            id="number"
            maxLength={5}
            {...register('houseNumber')}
            placeholder='Número'
            onChange={validateForm}
          />
          {errors.houseNumber &&
            <span className='text-sm break-words text-others-delete font-light'>
              {errors.houseNumber.message}
            </span>
          }
        </fieldset>
      </div>
      <fieldset className='flex flex-col gap-1'>
        <label className='text-color-title' htmlFor="complement">Complemento</label>
        <input
          className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
          type="text"
          id="complement"
          placeholder='Complemento (opcional)'
        />
      </fieldset>
      <fieldset className='flex flex-col gap-1'>
        <label className='text-color-title' htmlFor="city">Cidade</label>
        <input
          className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
          type="text"
          id="city"
          {...register('city')}
          placeholder='Cidade'
          onChange={validateForm}
        />
        {errors.city &&
          <span className='text-sm text-others-delete font-light'>
            {errors.city.message}
          </span>
        }
      </fieldset>
      <div className="flex flex-row justify-between">
        <fieldset className='flex flex-col gap-1'>
          <label className='text-color-title' htmlFor="state">Estado</label>
          <input
            className='w-full h-12 rounded-md p-3 bg-page-background/50 
            disabled:bg-slate-200 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
            type="text"
            id="state"
            {...register('state', {
              validate: value => value !== ''
            })}
            placeholder='Estado'
            disabled={state !== ''}
            value={state}
          />
        </fieldset>
        <fieldset className='flex flex-col gap-1 w-[8.125rem]'>
          <label className='text-color-title' htmlFor="zip-code">CEP</label>
          <input
            className='w-full h-12 rounded-md p-3 bg-page-background/50 border 
          border-color-complement outline-none focus:border-brand-orange
          text-color-text'
            type="text"
            id="zip-code"
            maxLength={9}
            {...register('zipCode')}
            placeholder='CEP'
            onChange={handleZipCodeChange}
          />
          {errors.zipCode &&
            <span className='text-sm break-words text-others-delete font-light'>
              {errors.zipCode.message}
            </span>
          }
        </fieldset>
      </div>
      <button
        type='submit'
        className="flex items-center justify-center gap-3 w-full h-11 
          rounded disabled:cursor-not-allowed disabled:bg-slate-400 
           text-background bg-brand-blue hover:bg-brand-blue/90"
        disabled={!isValid || isFilled}
      >
        Seguir para pagamento
      </button>
    </form>
  )
}
