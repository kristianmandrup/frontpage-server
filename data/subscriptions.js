import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PubSub, SubscriptionManager } from 'graphql-subscriptions';
import schema from './schema';

const pubsub = new RedisPubSub();
// const pubsub = new PubSub();

// const pubsub = new RedisPubSub({
//   connection: {
//     host: REDIS_DOMAIN_NAME,
//     port: PORT_NUMBER,
//     retry_strategy: options => {
//       // reconnect after upto 3000 milis
//       return Math.max(options.attempt * 100, 3000);
//     }
//   }
// });

const subscriptionManager = new SubscriptionManager({
  schema,
  pubsub,
});

export { subscriptionManager, pubsub };
