import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';

import SoundVastTitle from '../shared/title/soundVastTitle';
import Song from './songContainer';
import Grid from '../shared/grid/grid';
import AudiosHeader from '../audio/audiosHeader';
import Loader from '../shared/loaders/loader';
import Filters from '../audio/filtersContainer';
import convertSongToMedia from '../shared/utilities/convertSongToMedia';
import SideBar from '../audio/sideBarContainer';
import styles from './songs.less';
import Artists from '../audio/artists';

const Songs = ({ songs, loadMore }) => {
  const footerPlaylist = songs.edges.map(({ node }) => convertSongToMedia(node));

  return (
    <SoundVastTitle title="Songs">
      <div>
        <AudiosHeader typeUrl="songs" />
        <Filters />
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={songs.pageInfo.hasNextPage}
          loader={<Loader />}
          initialLoad={false}
          className={styles.gridContainer}
        >
          <Grid>
            {songs.edges.map(({ node }) =>
              <Song key={node.audioId} footerPlaylist={footerPlaylist} song={node} />)}
          </Grid>
          <SideBar audios={songs.items}>
            {audioIndex =>
              <Artists artists={songs.items[audioIndex].artists} className={styles.artists} />
            }
          </SideBar>
        </InfiniteScroll>
      </div>
    </SoundVastTitle>
  );
};

Songs.defaultProps = {
  currentSongId: null,
};

Songs.propTypes = {
  songs: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        artists: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
          }).isRequired,
        ),
      }).isRequired,
    ).isRequired,
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool.isRequired,
    }).isRequired,
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          audioId: PropTypes.number.isRequired,
        }),
      }),
    ),
  }).isRequired,
  loadMore: PropTypes.func.isRequired,
};

export default Songs;
