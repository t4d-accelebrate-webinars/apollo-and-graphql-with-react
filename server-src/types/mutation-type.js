import { GraphQLObjectType } from 'graphql';
import fetch from 'node-fetch';

import { bookInputType } from './book-input-type';
import { bookType } from './book-type';

const resourceName = 'books';

export const mutationType = new GraphQLObjectType({
    name: 'Mutation',

    // mutation InsertBook($bookInput: BookInputType) {
    //     insertBook(book: $bookInput) {
    //       id
    //       title
    //     }
    //   }

    // {
    //     "bookInput": {
    //       "isbn": "1111",
    //       "title": "New Book",
    //       "authorId": "2",
    //       "category": "Mystery",
    //       "price": 9.99,
    //       "quantity": 23
    //     }
    //   }

    fields: () => ({
        insertBook: {
            type: bookType,
            args: {
                book: { type: bookInputType },
            },
            resolve: (_, { book }, { restURL }) => {
                return fetch(`${restURL}/${resourceName}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(book),
                }).then(res => res.json());
            },
        }
    }),
});