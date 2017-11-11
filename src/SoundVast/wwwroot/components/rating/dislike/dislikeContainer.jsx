import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Dislike from './dislike';
import rateAudioSubscription from '../rateAudioSubscription';

const propTypes = {
  audioId: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ audioId, dislikes }) => () => rateAudioSubscription(audioId, dislikes, false),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Dislike);
