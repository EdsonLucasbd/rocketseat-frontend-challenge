import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: `${baseUrl}:3333/graphql`,
  cache: new InMemoryCache(),
});