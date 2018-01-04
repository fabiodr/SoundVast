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

export default ({ body }, audio) => {
  const variables = {
    input: {
      body,
      audioId: audio.audioId,
      originalCommentId: audio.originalCommentId,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    (store) => {
      const root = store.getRoot();
      const user = root.getLinkedRecord('user');
      const id = `client:newComment:${tempID += 1}`;
      const comment = store.create(id, 'Comment');
      const maxCommentId = Math.max(...audio.comments.items.map(item => item.commentId), 1);
      const commentId = maxCommentId + tempID;
      const dateAdded = getFormattedDate(new Date());

      comment.setValue(commentId, 'commentId');
      comment.setValue(body, 'body');
      comment.setLinkedRecord(user, 'user');
      comment.setValue(dateAdded, 'dateAdded');
      comment.setValue(0, 'likes');
      comment.setValue(0, 'dislikes');
      comment.setValue(0, 'repliesCount');

      sharedUpdater(store, audio, comment);
    },
    (store) => {
      const commentRoot = store.getRootField('comment');
      const comment = commentRoot.getLinkedRecord('comment');

      sharedUpdater(store, audio, comment);
    },
  );
};
