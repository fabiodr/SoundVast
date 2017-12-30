import { SubmissionError, change } from 'redux-form';
import { graphql } from 'react-relay';
import { compose, withHandlers, withProps, lifecycle, flattenProp, branch, renderNothing, withState } from 'recompose';
import { refetchContainer } from 'recompose-relay-modern';
import { connect } from 'react-redux';

import EditSongModal from './editSongModal';
import { hideModal } from '../shared/modal/actions';
import requestSongEditMutation from './requestSongEditMutation';
import { showEditPopup } from './actions';

const mapStateToProps = ({ modal }) => ({
  songId: modal.id,
});

const handlers = {
  onSubmit: ({ dispatch, songId }) => input =>
    requestSongEditMutation(input, songId)
      .then(() => {
        dispatch(showEditPopup());
        dispatch(hideModal());
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
  onDrop: ({ dispatch, updatePreviewUrl }) => files =>
    fetch.postForm('/upload/uploadCoverImage')({ file: files[0] })
      .then((json) => {
        updatePreviewUrl(files[0].preview);
        dispatch(change('edit', 'imagePath', json.imagePath));
      }),
};

const fragments = graphql`
  fragment editSongModalContainer on Query {
    user {
      id
    }
    songGenres {
      ...songGenresFieldContainer_genres
    }
    song(id: $songId) {
      name
      coverImageUrl
      free
      genre {
        id
      }
    }
  }
`;

const query = graphql`
  query editSongModalContainerQuery(
    $songId: Int
  ) {
    ...editSongModalContainer
  }
`;

const createProps = ({ user, song, previewUrl }) => ({
  isAuthorized: !!user,
  initialValues: {
    name: song.name,
    imagePath: song.coverImageUrl,
    genreId: song.genre.id,
    free: song.free,
  },
  previewUrl,
});

export default compose(
  connect(mapStateToProps),
  refetchContainer(fragments, query),
  flattenProp('data'),
  lifecycle({
    componentDidUpdate(prevProps) {
      if (prevProps.songId !== this.props.songId) {
        this.props.relay.refetch({ songId: this.props.songId });
      }
    },
  }),
  branch(
    props => !props.song,
    renderNothing,
  ),
  withState('previewUrl', 'updatePreviewUrl', ({ song }) => song.coverImageUrl),
  withHandlers(handlers),
  withProps(createProps),
)(EditSongModal);
