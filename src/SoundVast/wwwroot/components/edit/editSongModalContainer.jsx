import { SubmissionError, change } from 'redux-form';
import { graphql } from 'react-relay';
import { compose, withHandlers, withProps, lifecycle, flattenProp, branch, renderNothing, withStateHandlers } from 'recompose';
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

const stateHandlers = {
  updatePreviewUrl: () => preview => ({
    previewUrl: preview,
  }),
};

const fragments = graphql`
  fragment editSongModalContainer on Query
  @argumentDefinitions(
    songId: { type: "Int", defaultValue: null }
  ) {
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
      artists {
        name
      }
      genres {
        id
        name
      }
    }
  }
`;

const query = graphql`
  query editSongModalContainerQuery(
    $songId: Int
  ) {
    ...editSongModalContainer @arguments(songId: $songId)
  }
`;

const createProps = ({ user, song, previewUrl }) => ({
  isAuthorized: !!user,
  initialValues: {
    name: song.name,
    artists: song.artists.map(artist => ({
      label: artist.name,
      value: artist.name,
    })),
    imagePath: song.coverImageUrl,
    genres: song.genres.map(genre => ({
      id: genre.id,
      label: genre.name,
    })),
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
  withStateHandlers(({ song }) => ({
    previewUrl: song.coverImageUrl,
  }), stateHandlers),
  withHandlers(handlers),
  withProps(createProps),
)(EditSongModal);
