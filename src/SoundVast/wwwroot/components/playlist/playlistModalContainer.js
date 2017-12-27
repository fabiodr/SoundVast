import { compose, withHandlers, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { connect } from 'react-redux';
import { queryRenderer, paginationContainer } from 'recompose-relay-modern';
import { reduxForm, SubmissionError } from 'redux-form';

import PlaylistModal from './playlistModal';
import playlistValidation from './playlistValidation';
import createPlaylistMutation from './createPlaylistMutation';
import addSongToPlaylistMutation from './addSongToPlaylistMutation';
import { showCreatedPlaylistPopup } from './actions';
import { playlistsToLoad } from '../shared/utilities/itemsToLoad';
import { hideModal } from '../shared/modal/actions';

const mapStateToProps = ({ modal }) => ({
  songId: modal.songId,
});

const fragments = graphql`
  fragment playlistModalContainer_user on ApplicationUser {
    playlists (
      first: $count
      after: $cursor
    ) @connection(key: "playlistModalContainer_playlists") {
      totalCount
      edges {
        cursor
        node {
          playlistId
          name
          coverImageUrl
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const connectionConfig = {
  direction: 'forward',
  query: graphql`
    query playlistModalContainerForwardQuery (
      $count: Int!
      $cursor: String
    ) {
      user {
        ...playlistModalContainer_user
      }
    }
  `,
  getVariables: (props, { count, cursor }) => ({
    count,
    cursor,
  }),
};

const handlers = {
  yourPlaylistsOnClick: ({ dispatch }) => () => dispatch(hideModal()),
  loadMore: ({ relay }) => () => relay.loadMore(playlistsToLoad),
  onPlaylistClick: ({ songId }) => playlistId => addSongToPlaylistMutation({ songId, playlistId }),
  onSubmit: ({ dispatch, songId }) => input =>
    createPlaylistMutation(input)
      .then(({ createPlaylist }) => {
        addSongToPlaylistMutation(({ songId, playlistId: createPlaylist.playlist.playlistId }));
        dispatch(showCreatedPlaylistPopup(input.name));
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
};

export default compose(
  connect(mapStateToProps),
  queryRenderer(graphql`
    query playlistModalContainerQuery(
      $count: Int!
      $cursor: String
    ) {
      user {
        ...playlistModalContainer_user
      }
    }
  `, { count: playlistsToLoad }),
  paginationContainer(fragments, connectionConfig),
  flattenProp('user'),
  withHandlers(handlers),
  reduxForm({
    form: 'createPlaylist',
    validate: playlistValidation,
  }),

)(PlaylistModal);
