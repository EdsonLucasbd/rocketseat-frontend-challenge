import { Saira, Saira_Stencil_One, Abril_Fatface } from 'next/font/google'

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

const abril_Fatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril_Fatface',
  
  style: 'normal',
  display: 'auto'
})

export const saira = saira_normal.variable
export const abril = abril_Fatface.className