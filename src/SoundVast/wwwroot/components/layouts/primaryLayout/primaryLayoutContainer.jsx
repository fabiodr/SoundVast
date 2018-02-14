import { graphql } from 'react-relay';

import PrimaryLayout from './primaryLayout';

const query = graphql`
  query primaryLayoutContainerQuery {
    user {
      ...headerContainer_user,
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
  prepareVariables: (_, { location }) => ({
    __loggedInUserName: location.state && location.state.loggedInUserName,
  }),
};

export default PrimaryLayoutContainer;
