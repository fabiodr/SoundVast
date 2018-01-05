import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';
import { ConnectionHandler } from 'relay-runtime';

import getFormattedDate from '../shared/utilities/getFormattedDate';

const mutation = graphql`
  mutation commentMutation(
    $input: SaveCommentInput!
  ) {
    comment(input: $input) {
      comment {
        ...commentContainer_comment
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

let tempID = 0;

export default ({ body }, audio, originalCommentId) => {
  const variables = {
    input: {
      body,
      audioId: audio.audioId,
      originalCommentId,
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
      const commentRoot = store.getRootField('comment');
      const comment = commentRoot.getLinkedRecord('comment');

      sharedUpdater(store, audio, comment);
    },
  );
};
