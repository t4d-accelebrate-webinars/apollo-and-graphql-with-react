import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

import { queryType as query } from './types/query-type';

export const schema = new GraphQLSchema({
    query,
});