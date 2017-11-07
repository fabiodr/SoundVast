import { graphql } from 'react-relay';
import { compose, flattenProp } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import AuthorizedList from './authorizedList';

const fragments = graphql`
  fragment authorizedListContainer_user on ApplicationUser {
    userName
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
);

const AuthorizedListContainer = enhance(AuthorizedList);

export default AuthorizedListContainer;
