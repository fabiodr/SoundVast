import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Profile from './userProfile';
import maxInt from '../shared/utilities/maxInt';

const query = graphql`
  query userProfileContainerQuery(
    $count: Int!
    $cursor: String
    $originalCommentId: Int
  ) {
    user {
      ...userProfileContainer_user,
    }
  }
`;

const fragments = graphql`
  fragment userProfileContainer_user on ApplicationUser {
    userName
    uploads {
      audioId
      ...songContainer_song
    }
    likedSongs {
      audioId
      ...songContainer_song
    }
    ...userPlaylistsContainer
  }
`;

const UserProfileContainer = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
)(Profile);

export const routeConfig = {
  Component: UserProfileContainer,
  query,
  prepareVariables: () => ({
    count: maxInt,
  }),
};

export default UserProfileContainer;
