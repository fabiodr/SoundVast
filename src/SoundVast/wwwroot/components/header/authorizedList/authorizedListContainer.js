import { graphql } from 'react-relay';
import { compose, flattenProp, branch, renderNothing } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import AuthorizedList from './authorizedList';

const fragments = graphql`
  fragment authorizedListContainer_user on ApplicationUser {
    userName
    contributionScore
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
  branch(
    ({ userName }) => !userName,
    renderNothing,
  ),
);

const AuthorizedListContainer = enhance(AuthorizedList);

export default AuthorizedListContainer;
