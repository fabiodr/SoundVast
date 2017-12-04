import PropTypes from 'prop-types';
import { compose, setPropTypes, withHandlers } from 'recompose';

import Like from './like';
import rateCommentMutation from '../rateCommentMutation';

const propTypes = {
  commentId: PropTypes.number.isRequired,
};

const handlers = {
  onClick: ({ commentId }) => () => rateCommentMutation(commentId, true),
};

export default compose(
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Like);
