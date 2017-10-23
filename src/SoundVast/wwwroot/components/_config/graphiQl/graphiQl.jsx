import React from 'react';
import ReactDOM from 'react-dom';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch';
import 'graphiql/graphiql.css';

const graphQLFetcher = (graphQLParams) => {
  const formData = new FormData();

  Object.keys(graphQLParams).forEach((key) => {
    formData.append(key, graphQLParams[key]);
  });

  return fetch('/graphql', {
    method: 'post',
    body: formData,
  }).then(response => response.json());
};

ReactDOM.render(<GraphiQL fetcher={graphQLFetcher} />,
  document.getElementById('graphiQl'));
