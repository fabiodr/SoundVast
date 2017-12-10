import React from 'react';
import PropTypes from 'prop-types';

import Song from '../songs/songContainer';
import Grid from '../shared/grid/grid';

const Uploads = ({ uploads }) => (
  <Grid>
    {uploads.map(song => <Song key={song.audioId} song={song} />)}
  </Grid>
);

Uploads.defaultProps = {
  uploads: [],
};

Uploads.propTypes = {
  uploads: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
    }),
  ),
};

export default Uploads;
