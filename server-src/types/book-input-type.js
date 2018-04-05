import { 
  GraphQLInputObjectType, GraphQLID, GraphQLString,
  GraphQLInt, GraphQLFloat
} from 'graphql';

export const bookInputType = new GraphQLInputObjectType({

  name: 'BookInput',
  description: 'A book',

  fields: () => ({
    id: { type: GraphQLID },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorId: { type: GraphQLID },
    category: { type: GraphQLString },
    price: { type: GraphQLFloat },
    quantity: { type: GraphQLInt },    
  }),

});