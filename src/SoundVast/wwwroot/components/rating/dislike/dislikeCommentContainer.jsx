import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Dislike from './dislike';
import rateCommentMutation from '../rateCommentMutation';

const propTypes = {
  commentId: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ commentId }) => () => rateCommentMutation(commentId, false),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Dislike);
