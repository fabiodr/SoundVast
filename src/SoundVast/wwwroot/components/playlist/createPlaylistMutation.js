import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation createPlaylistMutation(
    $input: CreatePlaylistInput!
  ) {
    createPlaylist(input: $input) {
      playlist {
        playlistId
        name
        coverImageUrl
      }
    }
  }
`;

export default (input) => {
  const variables = {
    input,
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const createPlaylist = store.getRootField('createPlaylist');
      const playlist = createPlaylist.getLinkedRecord('playlist');

      const root = store.getRoot();
      const user = root.getLinkedRecord('user');
      const connection = ConnectionHandler.getConnection(
        user,
        'playlistModalContainer_playlists',
      );

      const edge = ConnectionHandler.createEdge(store, connection, playlist, 'PlaylistPayloadEdge');

      ConnectionHandler.insertEdgeAfter(connection, edge);
    },
  );
};
