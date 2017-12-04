import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Dislike from './dislike';
import rateAudioMutation from '../rateAudioMutation';

const propTypes = {
  audioId: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ audioId }) => () => rateAudioMutation(audioId, false),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Dislike);