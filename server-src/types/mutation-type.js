import { GraphQLObjectType } from 'graphql';
import fetch from 'node-fetch';

import { bookInputType } from './book-input-type';
import { bookType } from './book-type';

const resourceName = 'books';

export const mutationType = new GraphQLObjectType({
  name: 'Mutation',

  fields: () => ({
    insertBook: {
      type: bookType,
      args: {
        book: { type: bookInputType }
      },
      resolve: (_, { book }, { restURL }) => {

        return fetch(`${restURL}/${resourceName}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(book),
        }).then(res => res.json());

      }
    }
  }),
})