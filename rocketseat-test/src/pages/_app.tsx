import Header from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '../../context/CartContext'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#FFA585" />
      <CartProvider>
        <Header>
          <Component {...pageProps} />
        </Header>
      </CartProvider>
    </>
  )
}
