import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import CommentBox from './commentBox';
import commentMutation from './commentMutation';

const mapStateToProps = ({ jPlayers }) => ({
  audioId: jPlayers.FooterPlaylist.media.id,
});

const handlers = {
  onSubmit: ({ audioId }) => input => commentMutation(input, audioId),
};

export default compose(
  connect(mapStateToProps),
  withHandlers(handlers),
  reduxForm({
    form: 'commentBox',
  }),
)(CommentBox);
