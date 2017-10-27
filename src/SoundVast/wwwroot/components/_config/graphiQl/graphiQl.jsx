import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

const graphQLFetcher = graphQLParams =>
  fetch('/graphql', {
    method: 'post',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      ...graphQLParams,
      variables: JSON.stringify(graphQLParams.variables),
    }),
  }).then(response => response.json());

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />,
  document.getElementById('graphiQl'));
