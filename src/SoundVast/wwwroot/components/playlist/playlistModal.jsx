import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'found';

import Modal from '../shared/modal/modalContainer';
import ValidationErrors from '../shared/validation/validationErrors';
import SpinnerSubmit from '../shared/form/spinnerSubmit/spinnerSubmitContainer';
import NameField from '../shared/fields/nameField/nameField';
import Loader from '../shared/loaders/loader';
import ExistingPlaylist from './existingPlaylist';
import Grid from '../shared/grid/grid';
import styles from './playlistModal.less';

const PlaylistModal = ({
  error: errors,
  handleSubmit,
  form,
  isAuthorized,
  playlists,
  loadMore,
  yourPlaylistsOnClick,
}) => (
  <Modal authRequired title="Playlist." id="playlist" isAuthorized={isAuthorized}>
    <form onSubmit={handleSubmit} action="">
      <ValidationErrors errors={errors} />
      <NameField label="Playlist Name" />
      <SpinnerSubmit formName={form}>Create Playlist</SpinnerSubmit>
    </form>
    {playlists.totalCount > 0 ? (
      <div>
        <Link onClick={yourPlaylistsOnClick} to="/profile/playlists">Go to your playlists.</Link>
        <div>
          Or add to an existing playlist.
          <InfiniteScroll
            loadMore={loadMore}
            hasMore={playlists.pageInfo.hasNextPage}
            loader={<Loader />}
            initialLoad={false}
          >
            <Grid
              className={styles.existingPlaylistGrid}
              cellClassName={styles.existingPlaylistCell}
            >
              {playlists.edges.map(({ node }) => (
                <ExistingPlaylist
                  key={node.playlistId}
                  name={node.name}
                  coverImageUrl={node.coverImageUrl}
                />),
              )}
            </Grid>
          </InfiniteScroll>
        </div>
      </div>
    ) : null}
  </Modal>
);

PlaylistModal.defaultProps = {
  error: [],
  playlists: null,
};

PlaylistModal.propTypes = {
  yourPlaylistsOnClick: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  form: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
  playlists: PropTypes.shape({
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool,
    }),
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    })),
  }),
  loadMore: PropTypes.func.isRequired,
};

export default PlaylistModal;
