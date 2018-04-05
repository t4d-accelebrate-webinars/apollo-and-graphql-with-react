import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import { schema } from './schema';

const myGraphQLSchema = schema;
const PORT = 3030;

const context = {
  restURL: 'http://localhost:3040'
};

const app = express();
app.use(cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema, context }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);