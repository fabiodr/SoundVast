import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Artist from './artist';

const fragments = graphql`
  fragment artistContainer_artist on Artist {
    audioId
    name
    coverImageUrl
    playCount
    likes
    dislikes
    ...commentsContainer
  }
`;

export default compose(
  fragmentContainer(fragments),
)(Artist);
