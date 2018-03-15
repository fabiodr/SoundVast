import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { Helmet } from 'react-helmet';

import ScrollTracker from '../shared/scroll/scrollTracker';
import Radio from './radioContainer';
import Grid from '../shared/grid/grid';
import AudiosContent from '../content/audiosContentContainer';
import AudiosHeader from '../audio/audiosHeader';
import AudiosSubHeader from '../audio/audiosSubHeader';
import Loader from '../shared/loaders/loader';
import convertRadioToMedia from '../shared/utilities/convertRadioToMedia';
import SideBar from '../audio/sideBarContainer';
import styles from './radios.less';

const Radios = ({ liveStreams, loadMore }) => {
  const footerPlaylist = liveStreams.edges.map(({ node }) => convertRadioToMedia(node));

  return (
    <AudiosContent>
      <Helmet>
        <title>Radio stations | Free online radios, live streams and playlists</title>
        <meta name="description" content="50,000+ of the best radio stations and streams with live comments. Listen for free." />
      </Helmet>
      <AudiosHeader audioTypeText="radios" />
      <div className={styles.radiosBody}>
        <AudiosSubHeader />
        <ScrollTracker>
          {(elementToTrackRef, values) => (
            <div className={styles.infiniteScrollContainer} ref={elementToTrackRef}>
              <InfiniteScroll
                loadMore={loadMore}
                hasMore={liveStreams.pageInfo.hasNextPage}
                loader={<Loader key={0} />}
                initialLoad={false}
                className={styles.gridContainer}
              >
                <Grid cellClassName={styles.gridCellClassName}>
                  {liveStreams.edges.map(({ node }, i) => (
                    <Radio
                      key={node.audioId}
                      isFirstLiveStream={i === 0}
                      footerPlaylist={footerPlaylist}
                      liveStream={node}
                    />
                  ))}
                </Grid>
              </InfiniteScroll>
              <SideBar
                isFixed={values.pastTopOfElement}
                audios={liveStreams.edges.map(x => x.node)}
              />
            </div>
          )}
        </ScrollTracker>
      </div>
    </AudiosContent>
  );
};

Radios.propTypes = {
  liveStreams: PropTypes.shape({
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

export default Radios;
