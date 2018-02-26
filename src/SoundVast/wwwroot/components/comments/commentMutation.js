import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation commentMutation(
    $cursor: String
    $input: SaveCommentInput!
  ) {
    comment(input: $input) {
      comment {
        ...commentContainer_comment
        ...repliesContainer_comment
      },
    }
  }
`;

const sharedUpdater = (store, audio, comment) => {
  const audioProxy = store.get(audio.id);
  const connection = ConnectionHandler.getConnection(
    audioProxy,
    'commentsContainer_comments',
  );

  const edge = ConnectionHandler.createEdge(store, connection, comment, 'CommentPayloadEdge');

  ConnectionHandler.insertEdgeAfter(connection, edge);
};

export default ({ body }, audio) => {
  const variables = {
    input: {
      body,
      audioId: audio.audioId,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const commentRoot = store.getRootField('comment');
      const comment = commentRoot.getLinkedRecord('comment');

      sharedUpdater(store, audio, comment);
    },
  );
};
