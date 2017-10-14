import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const network = Network.create(operation =>
  fetch('/graphql', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
    }),
  }).then(response => response.json()));

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({
  network,
  store,
});

export default environment;
