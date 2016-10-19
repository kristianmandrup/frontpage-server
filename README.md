# Hello World server

The server that is used for the examples on dev.apollodata.com.

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema.

It uses a very simple in-memory database, so if you restart the server or change the code, the data will reset.

Furthermore, [Redis pub/sub subscriptions](https://medium.com/apollo-stack/graphql-subscriptions-with-redis-pub-sub-f636fc84a0c4#.19vxo3fgt) have been added. So you need to install and run a Redis DB server.

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

```
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.
