'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schema = undefined;

var _graphql = require('graphql');

var _queryType = require('./types/query-type');

var schema = exports.schema = new _graphql.GraphQLSchema({
    query: _queryType.queryType
});