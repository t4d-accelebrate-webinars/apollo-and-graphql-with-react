import {
    GraphQLObjectType, GraphQLID, GraphQLString,
    GraphQLFloat, GraphQLInt
} from 'graphql';

export const bookType = new GraphQLObjectType({

    name: 'Book',

    description: 'A Book',

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