import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation replyMutation(
    $input: SaveCommentInput!
  ) {
    comment(input: $input) {
      comment {
        ...replyContainer_reply
        replies {
          totalCount
        }
      }
    }
  }
`;

const sharedUpdater = (store, rootComment, reply) => {
  const commentProxy = store.get(rootComment.id);
  const connection = ConnectionHandler.getConnection(
    commentProxy,
    'repliesContainer_replies',
  );

  const replies = reply.getLinkedRecord('replies');
  const repliesCount = replies.getValue('totalCount');

  connection.setValue(repliesCount, 'totalCount');

  const edge = ConnectionHandler.createEdge(store, connection, reply, 'CommentPayloadEdge');

  ConnectionHandler.insertEdgeAfter(connection, edge);
};

export default ({ body }, audio, rootComment, originalComment) => {
  const variables = {
    input: {
      body,
      audioId: audio.audioId,
      originalCommentId: originalComment.commentId,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const replyRoot = store.getRootField('comment');
      const reply = replyRoot.getLinkedRecord('comment');

      sharedUpdater(store, rootComment, reply);
    },
  );
};
