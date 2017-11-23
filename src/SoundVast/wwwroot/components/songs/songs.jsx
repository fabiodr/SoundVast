import React from 'react';
import PropTypes from 'prop-types';
import SoundVastTitle from '../shared/title/soundVastTitle';

import Song from './song/song';
import Grid from '../shared/grid/grid';
import InfiniteScrollGrid from '../shared/grid/infiniteScrollGrid';

const Songs = ({ songs, loadMore, hasMore }) => (
  <SoundVastTitle title="Songs">
    <Grid>
      <InfiniteScrollGrid
        initialLoad={false}
        loadMore={loadMore}
        hasMore={hasMore}
      >
        {songs.map(song => (
          <Song
            key={song.audioId}
            audioId={song.audioId}
            coverImageUrl={song.coverImageUrl}
            name={song.name}
            artist={song.artist}
            likes={song.likes}
            dislikes={song.dislikes}
          />
        ))}
      </InfiniteScrollGrid>
    </Grid>
  </SoundVastTitle>
);

Songs.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      artist: PropTypes.string,
      coverImageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    }),
  ).isRequired,
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Songs;
