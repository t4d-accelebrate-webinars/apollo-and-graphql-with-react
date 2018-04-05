import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import fetch from 'node-fetch';

import { bookType } from './book-type';
import { authorType } from './author-type';


export const queryType = new GraphQLObjectType({

  name: 'Query',

  fields: () => ({
    message: {
      type: GraphQLString,
      description: 'A message of hope and peace!',
      resolve: () => 'Hello World',
    },
    books: {
      type: new GraphQLList(bookType),
      resolve: () => fetch('http://localhost:3040/books')
        .then(res => res.json()),
    },
    authors: {
      type: new GraphQLList(authorType),
      resolve: () => fetch('http://localhost:3040/authors')
        .then(res => res.json()),
    }
  }),

});