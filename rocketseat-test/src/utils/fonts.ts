import { Saira, Saira_Stencil_One } from 'next/font/google'

const saira_normal = Saira({ 
  subsets: ['latin'], 
  variable: '--font-saira',
  weight: ['300', '400', '500', '600'],
  display: 'swap'
})

const saira_stencil = Saira_Stencil_One({
  subsets: ['latin'],
  variable: '--font-saira_stencil',
  weight: '400',
  display: 'swap'
})

export const saira = saira_normal.variable
export const saira_stencil_one = saira_stencil.variable