// See http://dev.apollodata.com/tools/apollo-server/setup.html#apolloKoa

import koa from 'koa';
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { apolloKoa } from 'apollo-server';

import cors from 'kcors';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { printSchema } from 'graphql/utilities/schemaPrinter';

import { subscriptionManager } from './data/subscriptions';
import schema from './data/schema';


const app = new koa();
const router = new koaRouter();

const GRAPHQL_PORT = 8080;
const WS_PORT = 8090;

const PORT = 3000;

app.use(koaBody());
app.use(cors());

router.post('/graphql', apolloKoa({
    schema,
    context: {}
  })
);

router.get('/schema', (ctx) => {
  this.type = 'text/plain';
  this.body = printSchema(schema);
});


app.use(router.routes());
app.use(router.allowedMethods());
// app.listen(PORT);

app.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));

// WebSocket server for subscriptions
const websocketServer = createServer((request, response) => {
  response.writeHead(404);
  response.end();
});

websocketServer.listen(WS_PORT, () => console.log( // eslint-disable-line no-console
  `Websocket Server is now running on http://localhost:${WS_PORT}`
));

// eslint-disable-next-line
new SubscriptionServer(
  { subscriptionManager },
  websocketServer
);
