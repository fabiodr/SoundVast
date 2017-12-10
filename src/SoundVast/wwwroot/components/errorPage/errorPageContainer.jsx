import React from 'react';
import { compose, withProps, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import ErrorPage from './errorPage';

const createProps = ({ status }) => {
  switch (status) {
    case 404:
      return { error: 'The page could not be found' };
    default:
      return { error: 'A general error occured' };
  }
};

const query = graphql`
  query errorPageContainerQuery {
    quote {
      ...errorPageContainer_quote
    }
  }
`;

const fragments = graphql`
  fragment errorPageContainer_quote on Quote {
    quotation
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  flattenProp('quote'),
  withProps(createProps),
);

const ErrorPageContainer = enhance(ErrorPage);

export const routeConfig = {
  render: ({ props }) => props && (
    <ErrorPageContainer status={parseInt(props.params.status, 10)} quote={props.quote} />
  ),
  query,
};

export default ErrorPageContainer;
