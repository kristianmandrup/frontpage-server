# Hello World server

The server that is used for the examples on dev.apollodata.com.

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema.

It uses a very simple in-memory database, so if you restart the server or change the code, the data will reset.

## Feature additions

[Redis pub/sub subscriptions](https://medium.com/apollo-stack/graphql-subscriptions-with-redis-pub-sub-f636fc84a0c4#.19vxo3fgt) has been added. So you need to install and run a Redis DB server.

[koa2 server](http://dev.apollodata.com/tools/apollo-server/setup.html#apolloKoa) support has been added (see `koa2-server.js`)

## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/apollostack/frontpage-server
cd frontpage-server
npm install
```

## Starting redis

See [Redis quick start guide](http://redis.io/topics/quickstart)

Start the Redis server `redis-server`

Connect to server `redis-cli monitor`

## Starting the app server

*Express 4.0*

```
npm start
```

*Koa 2*

```
npm run start-koa
```


The server will run on port 8080. You can change this by editing `server.js`.

## Docs

Apollo Server accepts only JSON-encoded POST requests. A valid request must contain either a query or an operationName (or both, in case of a named query), and may include variables.

```js
{
  "query": "query aTest{ test(who: $arg1) }",
  "operationName": "aTest",
  "variables": { "arg1": "me" }
}
```

### batch of queries

can be sent by simply sending a JSON-encoded array of queries, e.g.

```js
[
  { "query": "{ testString }" },
  { "query": "query q2{ test(who: \"you\" ) }" }
]
```

### Schemas

[Generate a schema](http://dev.apollodata.com/tools/graphql-tools/generate-schema.html)

If your schema gets large, you may want to define parts of it in different files and import them to create the full schema.

### Mocking the server

[Mock your GraphQL data based on a schema](http://dev.apollodata.com/tools/graphql-tools/mocking.html)

`addMockFunctionsToSchema({schema, mocks = {}, preserveResolvers = false})`

`addMockFunctionsToSchema` is the function that mockServer uses under the hood. Given an instance of `GraphQLSchema` and a `mock` object, it modifies the schema in place to return mock data for any valid query that is sent to the server.

### Error handling and debugging

[Error handling and debugging](http://dev.apollodata.com/tools/graphql-tools/errors.html)

```js
import { forbidUndefinedInResolve } from 'graphql-tools';

forbidUndefinedInResolve(schema);
```

*Logging*

```js
import { addErrorLoggingToSchema } from 'graphql-tools';
const logger = { log: (e) => console.error(e.stack) };
addErrorLoggingToSchema(mySchema, logger);
```

### GraphiQL

[graphiql](https://github.com/graphql/graphiql) is an in-browser IDE for exploring GraphQL. Apollo comes with [graphiql](http://dev.apollodata.com/tools/apollo-server/graphiql.html) which has been configured in this project at the route `/graphiql`.

See a [graphql live demo](http://graphql-swapi.parseapp.com/)