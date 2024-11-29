import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // change uri to graphql backend  
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});