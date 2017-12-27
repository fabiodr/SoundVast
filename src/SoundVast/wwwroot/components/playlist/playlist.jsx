import React from 'react';
import PropTypes from 'prop-types';

import CoverImage from '../audio/coverImage';
import Play from './playContainer';

const Playlist = ({ coverImageUrl, id, name, playlists }) => (
  <div>
    {name}
    <Play id={id} playlists={playlists}>
      <CoverImage coverImageUrl={coverImageUrl} />
    </Play>
  </div>
);

Playlist.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  playlists: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape({
        playlistId: PropTypes.number.isRequired,
        songPlaylists: PropTypes.shape({
          items: PropTypes.arrayOf(PropTypes.shape({
            song: PropTypes.shape({
              coverImageUrl: PropTypes.string.isRequired,
              audioId: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
              artist: PropTypes.string,
              free: PropTypes.bool.isRequired,
            }),
          })),
        }),
      }),
    })),
  }).isRequired,
};

export default Playlist;
