import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import fetch from 'node-fetch';
import qs from 'querystring';

import { bookType } from './book-type';

export const queryType = new GraphQLObjectType({
    name: "Query",
    
    fields: {
        books: {
            type: new GraphQLList(bookType),
            resolve: () => fetch('http://localhost:3040/books')
                .then(res => res.json()),
        },
        book: {
            type: bookType,
            args: {
                id: { type: GraphQLID },
            },
            resolve: (_, { id }) => fetch(`http://localhost:3040/books/${qs.escape(id)}`)
                .then(res => res.json()),
        },
    },
});