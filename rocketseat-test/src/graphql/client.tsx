import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});