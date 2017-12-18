import { SubmissionError } from 'redux-form';
import { graphql } from 'react-relay';
import { compose, withHandlers, withProps } from 'recompose';
import { fragmentContainer } from 'recompose-relay-modern';

import EditSongModal from './editSongModal';
import { showModal, hideModal } from '../shared/modal/actions';
import editSongMutation from './editSongMutation';
import { showEditPopup } from './actions';

const handlers = {
  onSubmit: ({ dispatch, songId }) => input =>
    editSongMutation(input, songId)
      .then(() => {
        dispatch(showEditPopup());
        dispatch(hideModal());
      }).catch((error) => {
        throw new SubmissionError(error);
      }),
};

const fragments = graphql`
  fragment editSongModalContainer_song on Song {
    name
    coverImageUrl
    artist
  }
`;

const query = graphql`
  query editSongModalContainerQuery(
    $songId: Int!
  ) {
    user {
      id
    }
    song(id: $songId) {
      ...editSongModalContainer_song
    }
  }
`;

const createProps = ({ user }) => ({
  isAuthorized: user !== null,
});

const enhance = compose(
  fragmentContainer(fragments),
  withHandlers(handlers),
  withProps(createProps),
);

const EditSongModalContainer = enhance(EditSongModal);

export const routeConfig = {
  getComponent: ({ context }) => {
    const state = context.store.getState();

    if (state.modal.id) {
      return EditSongModalContainer;
    }

    return null;
  },
  getQuery: ({ context }) => {
    const state = context.store.getState();

    if (state.modal.id) {
      return query;
    }

    return null;
  },
  prepareVariables: (_, { context }) => {
    const state = context.store.getState();

    return {
      songId: state.modal.id,
    };
  },
};

export default EditSongModalContainer;
