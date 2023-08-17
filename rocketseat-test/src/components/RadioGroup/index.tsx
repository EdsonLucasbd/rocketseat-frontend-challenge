import React, { InputHTMLAttributes } from "react"

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export const RadioGroup = ({ label, id, ...rest }: RadioGroupProps) => {
  return (
    <div className='flex flex-row gap-2'>
      <input
        className="relative float-left h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-400
          before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full
          before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']
          after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] 
          checked:border-brand-orange checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 
          checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full 
          checked:after:border-brand-orange checked:after:bg-brand-orange checked:after:content-[''] 
          checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] 
          hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-0 focus:before:scale-100 
          focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
          focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-brand-orange 
          checked:focus:before:scale-90 checked:focus:before:shadow-[0px_0px_0px_13px_#F25D27] 
          checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] peer"
        type="radio"
        name="payment"
        {...rest}
        id={id} />
      <label htmlFor={id} className="text-color-text peer-checked:text-brand-orange">{label}</label>
    </div>
  )
}
