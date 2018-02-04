import { compose } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Radio from './radio';

const fragments = graphql`
  fragment radioContainer_liveStream on LiveStream {
    audioId
    name
    coverImageUrl
    liveStreamUrl
    websiteUrl
    playCount
    likes
    dislikes
    ...likeAudioContainer_audio
    ...dislikeAudioContainer_audio
  }
`;

export default compose(
  fragmentContainer(fragments),
)(Radio);
