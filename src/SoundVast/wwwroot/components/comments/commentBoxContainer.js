import { reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, setPropTypes } from 'recompose';
import { connect } from 'react-redux';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const mapStateToProps = ({ jPlayers }) => ({
  currentAudioId: jPlayers.FooterPlaylist.media.id,
});

const handlers = {
  onSubmit: ({ currentAudioId, originalCommentId }) => (input) => {
    commentMutation(input, currentAudioId, originalCommentId);
  },
};

const propTypes = {
  originalCommentId: PropTypes.number,
};

const createProps = ({ currentAudioId }) => ({
  form: `commentBox_${currentAudioId}`,
  destroyOnUnmount: false,
});

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  withHandlers(handlers),
  withProps(createProps),
  reduxForm(),
)(CommentBox);
