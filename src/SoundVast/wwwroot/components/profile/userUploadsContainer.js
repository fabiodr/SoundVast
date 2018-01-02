import { compose, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import UserUploads from './userUploads';
import { audiosToLoad } from '../shared/utilities/itemsToLoad';

const query = graphql`
  query userUploadsContainerQuery {
    user {
      ...userUploadsContainer_user,
    }
  }
`;

const fragments = graphql`
  fragment userUploadsContainer_user on ApplicationUser {
    uploads {
      audioId
      ...songContainer_song
    }
  }
`;

const UserUploadsContainer = compose(
  fragmentContainer(fragments),
  flattenProp('user'),
)(UserUploads);

export const routeConfig = {
  Component: UserUploadsContainer,
  query,
  prepareVariables: () => ({
    count: audiosToLoad,
  }),
};

export default UserUploadsContainer;
