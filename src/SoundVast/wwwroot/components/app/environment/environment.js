import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

const network = Network.create((operation, variables, cacheConfig, uploadables = {}) => {
  const formData = new FormData();

  formData.append('query', operation.text);
  formData.append('variables', JSON.stringify(variables));

  Object.keys(uploadables).forEach((key) => {
    formData.append('uploadables', uploadables[key]);
  });

  return fetch('/graphql', {
    method: 'post',
    body: formData,
  }).then(response => response.json());
});

const source = new RecordSource();
const store = new Store(source);
const environment = new Environment({
  network,
  store,
});

export default environment;
