import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const authorType = new GraphQLObjectType({
  name: 'Author',

  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
  })
})