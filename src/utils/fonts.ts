import { Saira, Saira_Stencil_One, K2D } from 'next/font/google'

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

const k2d = K2D({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-k2d',
  display: 'swap'
})

export const saira = saira_normal.variable
export const k2dFont = k2d.className