import { graphql } from 'react-relay';
import { compose, flattenProp, branch, renderNothing } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import UserButton from './userButton';

const fragments = graphql`
  fragment userButtonContainer_user on ApplicationUser {
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

const UserButtonContainer = enhance(UserButton);

export default UserButtonContainer;
