import { 
  GraphQLObjectType, GraphQLID, GraphQLString,
  GraphQLInt, GraphQLFloat
} from 'graphql';
import fetch from 'node-fetch';

import { authorType } from './author-type';

export const bookType = new GraphQLObjectType({

  name: 'Book',
  description: 'A book',

  fields: () => ({
    id: { type: GraphQLID },
    isbn: { type: GraphQLString },
    title: { type: GraphQLString },
    authorId: { type: GraphQLID },
    author: {
      type: authorType,
      resolve: ({ authorId }, _, { restURL }) => {
        return fetch(`${restURL}/authors/${authorId}`)
          .then(res => res.json());
      },
    },
    category: { type: GraphQLString },
    price: { type: GraphQLFloat },
    quantity: { type: GraphQLInt },    
  }),

});