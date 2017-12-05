import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { compose, withHandlers, defaultProps, setPropTypes } from 'recompose';
import { connect } from 'react-redux';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const mapStateToProps = ({ jPlayers }) => ({
  audioId: jPlayers.FooterPlaylist.media.id,
});

const handlers = {
  onSubmit: ({ audioId, originalCommentId }) => (input) => {
    commentMutation(input, audioId, originalCommentId);
  },
};

const propTypes = {
  originalCommentId: PropTypes.number,
};

export default compose(
  setPropTypes(propTypes),
  defaultProps({
    form: 'commentBox',
  }),
  connect(mapStateToProps),
  withHandlers(handlers),
  reduxForm(),
)(CommentBox);
