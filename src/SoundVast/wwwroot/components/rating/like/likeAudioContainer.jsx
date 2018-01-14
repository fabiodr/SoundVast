import { compose, withHandlers } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Like from './like';
import rateAudioMutation from '../rateAudioMutation';

const fragments = graphql`
  fragment likeAudioContainer_audio on Audio {
    id
    audioId
  }
`;

const handlers = {
  onClick: ({ audio }) => () => rateAudioMutation(audio, true),
};

export default compose(
  fragmentContainer(fragments),
  withHandlers(handlers),
)(Like);
