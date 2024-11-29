import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  // change uri to graphql backend  
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});