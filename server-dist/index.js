'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _apolloServerExpress = require('apollo-server-express');

var _schema = require('./schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myGraphQLSchema = _schema.schema;
var PORT = 3030;

var app = (0, _express2.default)();
app.use((0, _cors2.default)());

app.use('/graphql', _bodyParser2.default.json(), (0, _apolloServerExpress.graphqlExpress)({ schema: myGraphQLSchema }));
app.get('/graphiql', (0, _apolloServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

app.listen(PORT);