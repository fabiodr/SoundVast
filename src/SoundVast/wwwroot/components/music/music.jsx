import React from 'react';
import PropTypes from 'prop-types';

import SoundVastTitle from '../shared/title/soundVastTitle';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/infiniteScrollGrid';
import Audios from './audios/container';
import styles from './music.less';

const Music = ({ fetchMusic, hasMore }) => (
  <SoundVastTitle title="Music">
    <div className={styles.music} style={{'overflow-anchor': 'none'}}>
      <InfiniteScrollGrid loadMore={fetchMusic} hasMore={hasMore}>
        <Audios />
      </InfiniteScrollGrid>
    </div>
  </SoundVastTitle>
);

Music.propTypes = {
  fetchMusic: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
};

export default Music;
