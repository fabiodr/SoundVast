import { graphql } from 'react-relay';
import { compose, flattenProp, branch, renderNothing } from 'recompose';
import { fragment } from 'relay-compose';

import AuthorizedList from './authorizedList';

const fragments = graphql`
  fragment authorizedListContainer_user on ApplicationUser {
    userName
  }
`;

const enhance = compose(
  fragment(fragments),
  flattenProp('user'),
  branch(
    ({ userName }) => !userName,
    renderNothing,
  ),
);

const AuthorizedListContainer = enhance(AuthorizedList);

export default AuthorizedListContainer;
