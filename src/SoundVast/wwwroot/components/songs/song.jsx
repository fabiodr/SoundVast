import React from 'react';
import PropTypes from 'prop-types';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImage';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import PlayCount from '../audio/playCount';
import Name from '../audio/name';
import Artists from '../audio/artists';
import Flag from '../flag/flag';
import Edit from '../edit/edit';
import AddToPlaylist from '../playlist/addToPlaylistContainer';
import SideBar from '../audio/sideBar';

const Song = ({ song, isOnCurrentSong }) => (
  <div>
    <Play id={song.audioId}>
      <CoverImage coverImageUrl={song.coverImageUrl} />
    </Play>
    <Name name={song.name} />
    <PlayCount playCount={song.playCount} />
    <Artists artists={song.artists} />
    <Rating likes={song.likes} dislikes={song.dislikes}>
      <Like audioId={song.audioId} />
      <Dislike audioId={song.audioId} />
    </Rating>
    <AddToPlaylist songId={song.audioId} />
    <Edit modalId="editSong" id={song.audioId} />
    <Flag modalId="flagAudio" id={song.audioId} />
    { isOnCurrentSong ? <SideBar data={song} /> : null }
  </div>
);

Song.propTypes = {
  isOnCurrentSong: PropTypes.bool.isRequired,
  song: PropTypes.shape({
    coverImageUrl: PropTypes.string.isRequired,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    playCount: PropTypes.number.isRequired,
    artists: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default Song;
