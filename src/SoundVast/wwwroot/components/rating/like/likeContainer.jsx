import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Like from './like';
import rateAudioMutation from '../rateAudioMutation';

const propTypes = {
  audioId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ audioId, likes }) => () => rateAudioMutation(audioId, likes, true),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Like);
