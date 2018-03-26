import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Play from '../audio/playContainer';
import CoverImage from '../audio/coverImageContainer';
import Rating from '../rating/audioRating';
import Like from '../rating/like/likeAudioContainer';
import Dislike from '../rating/dislike/dislikeAudioContainer';
import Name from '../audio/name';
import Flag from '../flag/flag';
import styles from './radio.less';
import RatingPercent from '../rating/ratingPercent';
import SideBar from '../audio/mobileSideBarContainer';

const Radio = ({ isFirstLiveStream, liveStream, footerPlaylist }) => {
  const name = <Name className={styles.radioName} name={liveStream.name} />;

  return (
    <div>
      {liveStream.websiteUrl ? <a href={liveStream.websiteUrl} target="_blank">{name}</a> : <div>{name}</div>}
      <div className={styles.coverImageContainer}>
        <Play id={liveStream.audioId} footerPlaylist={footerPlaylist}>
          <CoverImage name={liveStream.name} coverImages={liveStream.coverImages} />
        </Play>
      </div>
      <div className={styles.controls}>
        <div className={styles.controlsRow}>
          <RatingPercent
            className={styles.ratingPercent}
            likes={liveStream.likes}
            dislikes={liveStream.dislikes}
          />
          <div className={styles.alignRight}>
            <Rating
              likes={liveStream.likes}
              dislikes={liveStream.dislikes}
              like={<Like audio={liveStream} />}
              dislike={<Dislike audio={liveStream} />}
            />
          </div>
        </div>
        <div className={styles.controlsRow}>
          <div className={classnames(styles.alignRight, styles.extraControls)}>
            <Flag modalId="flagAudio" id={liveStream.audioId} />
          </div>
        </div>
      </div>
      <SideBar
        audio={liveStream}
        isFirstLiveStream={isFirstLiveStream}
      />
    </div>
  );
};

Radio.propTypes = {
  liveStream: PropTypes.shape({
    coverImages: PropTypes.arrayOf(
      PropTypes.shape({
        dimention: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      }).isRequired,
    ),
    websiteUrl: PropTypes.string,
    audioId: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isFirstLiveStream: PropTypes.bool.isRequired,
  footerPlaylist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      sources: PropTypes.shape({
        mp3: PropTypes.arrayOf(
          PropTypes.shape({
            src: PropTypes.string.isRequired,
          }).isRequired,
        ).isRequired,
      }),
      poster: PropTypes.string,
    }),
  ).isRequired,
};

export default Radio;
