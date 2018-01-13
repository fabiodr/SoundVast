import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
import styles from './song.less';

const Song = ({ song, footerPlaylist }) => (
  <div>
    <div
      className={classnames(
        styles.songTitle,
        !song.artists.length && styles.songTitleNameOnly)
      }
    >
      <Artists artists={song.artists} />
      <Name className={styles.songName} name={song.name} />
    </div>
    <Play id={song.audioId} footerPlaylist={footerPlaylist}>
      <CoverImage coverImageUrl={song.coverImageUrl} />
    </Play>
    <div className={styles.controls}>
      <div className={styles.controlsRow}>
        <PlayCount className={styles.playCount} playCount={song.playCount} />
        <div className={styles.alignRight}>
          <AddToPlaylist songId={song.audioId} />
        </div>
      </div>
      <div className={styles.controlsRow}>
        <Rating likes={song.likes} dislikes={song.dislikes}>
          <Like audioId={song.audioId} />
          <Dislike audioId={song.audioId} />
        </Rating>
        <div className={classnames(styles.alignRight, styles.extraControls)}>
          <Edit modalId="editSong" id={song.audioId} />
          <Flag modalId="flagAudio" id={song.audioId} />
        </div>
      </div>
    </div>
  </div>
);

Song.propTypes = {
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
  footerPlaylist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string,
      sources: PropTypes.object.isRequired,
      poster: PropTypes.string.isRequired,
      free: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Song;
