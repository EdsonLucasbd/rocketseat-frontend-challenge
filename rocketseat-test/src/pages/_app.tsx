import Header from '@/components/Layout'
import { client } from '@/graphql/client'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { CartProvider } from '../../context/CartContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CartProvider>
        <Header>
          <Component {...pageProps} />
        </Header>
      </CartProvider>
    </ApolloProvider>
  )
}
