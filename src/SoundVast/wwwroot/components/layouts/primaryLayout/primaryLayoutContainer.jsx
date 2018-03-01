import React from 'react';
import { graphql } from 'react-relay';

import PrimaryLayout from './primaryLayout';
import { setUser, setCoverImagePlaceholder } from '../../app/actions';

const query = graphql`
  query primaryLayoutContainerQuery {
    user {
      userId
      userName
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
  render: (route) => { // eslint-disable-line react/prop-types
    if (route.props) {
      route.props.context.store.dispatch(setCoverImagePlaceholder());
      route.props.context.store.dispatch(setUser(route.props.user));

      return <PrimaryLayout loginProviders={route.props.loginProviders} />;
    }

    return null;
  },
  prepareVariables: (_, { location }) => ({
    __loggedInUserName: location.state && location.state.loggedInUserName,
  }),
};

export default PrimaryLayoutContainer;
