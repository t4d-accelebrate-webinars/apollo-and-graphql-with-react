import { GraphQLObjectType, GraphQLString } from 'graphql';

export const queryType = new GraphQLObjectType({
    name: "Query",
    
    fields: {
        message: {
            type: GraphQLString,
            resolve: () => 'Hello World!',
        },
    },
});