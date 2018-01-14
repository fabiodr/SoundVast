import { compose, withHandlers } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';
import { graphql } from 'react-relay';

import Dislike from './dislike';
import rateAudioMutation from '../rateAudioMutation';

const fragments = graphql`
  fragment dislikeAudioContainer_audio on Audio {
    id
    audioId
  }
`;

const handlers = {
  onClick: ({ audio }) => () => rateAudioMutation(audio, false),
};

export default compose(
  fragmentContainer(fragments),
  withHandlers(handlers),
)(Dislike);
