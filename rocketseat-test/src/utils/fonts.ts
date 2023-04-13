import { Saira, Saira_Stencil_One, } from 'next/font/google'

const saira_normal = Saira({ 
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'], 
  variable: '--font-saira',
  display: 'swap'
})

const saira_stencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-saira_stencil',
  display: 'swap'
})

export const saira = saira_normal.variable
export const saira_stencil_one = saira_stencil.variable