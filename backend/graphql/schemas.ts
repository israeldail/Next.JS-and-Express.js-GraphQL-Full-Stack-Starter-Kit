const typeDefs = `#graphql
  type User {
    """ ID of user """
    id: ID!
    """ Title of user """
    name: String!
  },
  type Query {
  """ Get all users """
    users: [User]
  }
`;

export { typeDefs }