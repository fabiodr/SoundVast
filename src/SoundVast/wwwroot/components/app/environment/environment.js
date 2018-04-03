import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { setEnviroment } from 'recompose-relay-modern';

const fetchQuery = (operation, variables) =>
  fetch('/graphql', {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
    .then((json) => {
      // https://github.com/facebook/relay/issues/1816
      if (json.errors) {
        return Promise.reject(json.errors);
      }

      return Promise.resolve(json);
    });

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text;

  const subscriptionClient = new SubscriptionClient(`wss://${window.location.host}/graphql`, { reconnect: true });

  subscriptionClient.subscribe({ query, variables }, (error, result) => {
    observer.onNext({ data: result });
  });
};

const network = Network.create(fetchQuery, setupSubscription);
const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({
  network,
  store,
});

setEnviroment(environment);

export default environment;
