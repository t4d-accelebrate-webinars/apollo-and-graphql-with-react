import {
    GraphQLInputObjectType, GraphQLID, GraphQLString,
    GraphQLFloat, GraphQLInt
} from 'graphql';

export const bookInputType = new GraphQLInputObjectType({

    name: 'BookInput',

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