import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import UserLikedSongs from './userLikedSongs';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';

const query = graphql`
  query userLikedAudiosContainerQuery {
    user {
      ...userLikedAudiosContainer_user,
    }
  }
`;

const fragments = graphql`
  fragment userLikedAudiosContainer_user on ApplicationUser {
    likedSongs {
      audioId
      ...songContainer_song
    }
  }
`;

const UserLikedAudiosContainer = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
)(UserLikedSongs);

export const routeConfig = {
  Component: UserLikedAudiosContainer,
  query,
  prepareVariables: () => ({
    count: audiosToLoad,
  }),
};

export default UserLikedAudiosContainer;
