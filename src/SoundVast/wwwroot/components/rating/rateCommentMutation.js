import { graphql } from 'react-relay';
import { createMutation } from 'recompose-relay-modern';

const mutation = graphql`
  mutation rateCommentMutation(
    $input: RateInput!
  ) {
    rateComment(input: $input) {
      rating {
        comment {
          likes
          dislikes
        }
      }
    }
  }
`;

export default (comment, liked) => {
  const variables = {
    input: {
      id: comment.commentId,
      liked,
    },
  };

  return createMutation(
    mutation,
    variables,
    null,
    null,
    (store) => {
      const rateComment = store.getRootField('rateComment');
      const rating = rateComment.getLinkedRecord('rating');
      const commentRecord = rating.getLinkedRecord('comment');

      if (commentRecord === null) {
        const commentProxy = store.get(comment.id);
        const likes = commentProxy.getValue('likes');
        const dislikes = commentProxy.getValue('dislikes');

        if (liked) {
          commentProxy.setValue(likes - 1, 'likes');
        } else {
          commentProxy.setValue(dislikes - 1, 'dislikes');
        }
      }
    },
  );
};
