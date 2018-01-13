import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';
import { ConnectionHandler } from 'relay-runtime';

import getFormattedDate from '../shared/utilities/getFormattedDate';

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

let tempID = 0;

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
    (store) => {
      // if (!body) return;

      // const root = store.getRoot();
      // const user = root.getLinkedRecord('user');
      // const originalComment = store.create(`originalComment_${tempID += 1}`, 'originalComment');
      // const comment = store.create(`newComment_${tempID += 1}`, 'comment');
      // const dateAdded = getFormattedDate(new Date());

      // originalComment.setValue(originalCommentId, 'commentId');

      // comment.setValue(tempID * -1, 'commentId');
      // comment.setValue(body, 'body');
      // comment.setLinkedRecord(user, 'user');
      // comment.setLinkedRecord(originalComment, 'originalComment');
      // comment.setValue(dateAdded, 'dateAdded');
      // comment.setValue(0, 'likes');
      // comment.setValue(0, 'dislikes');
      // comment.setValue(0, 'repliesCount');

      // sharedUpdater(store, audio, comment);
    },
    (store) => {
      const replyRoot = store.getRootField('comment');
      const reply = replyRoot.getLinkedRecord('comment');

      sharedUpdater(store, rootComment, reply);
    },
  );
};
