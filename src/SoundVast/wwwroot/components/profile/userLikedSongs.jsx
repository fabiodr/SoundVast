import React from 'react';
import PropTypes from 'prop-types';

import Song from '../songs/songContainer';
import Grid from '../shared/grid/grid';

const UserLikedSongs = ({ likedSongs }) => (
  <Grid>
    {likedSongs.map(song => <Song key={song.audioId} song={song} />)}
  </Grid>
);

UserLikedSongs.defaultProps = {
  likedSongs: [],
};

UserLikedSongs.propTypes = {
  likedSongs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
    }),
  ),
};

export default UserLikedSongs;
