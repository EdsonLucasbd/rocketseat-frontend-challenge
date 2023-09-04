import React, { InputHTMLAttributes } from "react"


export const CustomInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = () => {
  return (
    <input className='w-[23.4375rem] h-12 rounded-md p-3 bg-page-background/50 border 
    border-color-complement outline-none focus:border-brand-orange
    text-color-text' />
  )
}
