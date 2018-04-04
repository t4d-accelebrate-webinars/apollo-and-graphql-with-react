'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queryType = undefined;

var _graphql = require('graphql');

var queryType = exports.queryType = new _graphql.GraphQLObjectType({
    name: "Query",

    fields: {
        message: {
            type: _graphql.GraphQLString,
            resolve: function resolve() {
                return 'Hello World!';
            }
        }
    }
});