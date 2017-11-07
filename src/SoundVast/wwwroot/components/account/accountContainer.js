import { graphql } from 'react-relay';

import Account from './account';

const query = graphql`
  query accountContainerQuery {
    loginProviders {
      ...socialLoginsContainer_loginProviders
    }
  }
`;

const AccountContainer = Account;

export const routeConfig = {
  Component: AccountContainer,
  query,
};

export default AccountContainer;
