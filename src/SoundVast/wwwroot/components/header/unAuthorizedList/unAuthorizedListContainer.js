import { compose, branch, renderNothing, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragment } from 'relay-modern-hoc';

import UnAuthorizedList from './unAuthorizedList';

const fragments = graphql`
  fragment unAuthorizedListContainer_user on ApplicationUser {
    userName
  }
`;

const enhance = compose(
  fragment(fragments),
  flattenProp('user'),
  branch(
    ({ userName }) => userName,
    renderNothing,
  ),
);

const UnAuthorizedListContainer = enhance(UnAuthorizedList);

export default UnAuthorizedListContainer;
