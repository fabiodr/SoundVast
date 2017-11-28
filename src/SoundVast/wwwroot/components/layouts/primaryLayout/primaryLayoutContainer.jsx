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
};

export default PrimaryLayoutContainer;
