import { graphql } from 'react-relay';

import PrimaryLayout from './primaryLayout';

const query = graphql`
  query primaryLayoutContainerQuery(
    $songId: Int
  ) {
    user {
      ...authorizedListContainer_user,
      ...unAuthorizedListContainer_user,
    }
    loginProviders {
      ...socialLoginsContainer_loginProviders,
    }
    ...editSongModalContainer
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
