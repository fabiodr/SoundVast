import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Song from './song';

const fragments = graphql`
  fragment songContainer_song on Song {
    audioId
    name
    coverImageUrl
    artists {
      name
    }
    playCount
    likes
    dislikes
  }
`;

export default compose(
  fragmentContainer(fragments),
)(Song);
