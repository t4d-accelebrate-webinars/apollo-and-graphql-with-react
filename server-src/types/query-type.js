import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import fetch from 'node-fetch';
import qs from 'querystring';

import { bookType } from './book-type';

const resourceName = 'books';

export const queryType = new GraphQLObjectType({
    name: "Query",
    
    fields: {
        books: {
            type: new GraphQLList(bookType),
            resolve: (_1, _2, { restURL }) => fetch(`${restURL}/${resourceName}`)
                .then(res => res.json()),
        },
        book: {
            type: bookType,
            args: {
                id: { type: GraphQLID },
            },
            resolve: (_, { id }, { restURL }) => fetch(`${restURL}/${resourceName}/${qs.escape(id)}`)
                .then(res => res.json()),
        },
    },
});