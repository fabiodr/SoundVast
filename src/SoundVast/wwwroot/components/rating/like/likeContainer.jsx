import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Like from './like';
import rateAudioSubscription from '../rateAudioSubscription';

const propTypes = {
  audioId: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ audioId, likes }) => () => rateAudioSubscription(audioId, likes, true),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Like);
