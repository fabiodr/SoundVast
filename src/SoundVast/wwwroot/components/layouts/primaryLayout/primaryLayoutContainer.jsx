import React from 'react';
import { graphql } from 'react-relay';

import PrimaryLayout from './primaryLayout';

const query = graphql`
  query primaryLayoutContainerQuery {
    user {
      ...authorizedListContainer_user,
      ...unAuthorizedListContainer_user,
    }
    loginProviders {
      ...socialLoginsContainer_loginProviders,
    }
  }
`;

const PrimaryLayoutContainer = PrimaryLayout;

export const routeConfig = {
  Component: PrimaryLayoutContainer,
  query,
  render: (route) => {
    if (route.props) {
      if (!route.props.user) {
     //   route.retry();
      }
    }
    return route.props && <PrimaryLayoutContainer {...route.props} />;
  },
};

export default PrimaryLayoutContainer;
