import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';

import '../../shared/fetch/fetch';

const username = 'TestUser';
const password = 'Password';

const loginTestAccount = () =>
  fetch.post('/account/login', { response: 'response' })({
    username,
    password,
  });

const registerTestAccount = () =>
  fetch.post('/account/register')({
    username,
    email: 'test@gmail.com',
    password,
    confirmPassword: 'Password',
  }).catch((response) => {
    if (response.status === 400) {
      loginTestAccount();
    }
  });

registerTestAccount();

const graphQLFetcher = graphQLParams =>
  fetch.post('/graphql')({
    ...graphQLParams,
    variables: JSON.stringify(graphQLParams.variables),
  }).catch(response => response.json());

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />,
  document.getElementById('graphiQl'));
