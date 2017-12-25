import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import UserProfile from './userProfile';

const query = graphql`
  query userProfileContainerQuery {
    user {
      ...userProfileContainer_user,
    }
  }
`;

const fragments = graphql`
  fragment userProfileContainer_user on ApplicationUser {
    userName
  }
`;

const UserProfileContainer = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
)(UserProfile);

export const routeConfig = {
  Component: UserProfileContainer,
  query,
};

export default UserProfileContainer;
