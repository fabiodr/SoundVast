// import React from 'react';
// import PropTypes from 'prop-types';
// import InfiniteScrollGrid from '../content/infiniteScrollGrid/component';
// import SoundVastTitle from '../shared/soundVastTitle/component';

// import Radio from './radio/container';
// import styles from './component.less';

// const Radios = ({ radios, fetchRadios, hasMore }) => (
//   <SoundVastTitle title="Radio">
//     <div className={styles.songsContainer}>
//       <InfiniteScrollGrid loadMore={fetchRadios} hasMore={hasMore} className={styles.songs}>
//         {radios.map((song, index) => <Radio key={song.id} index={index} {...song} />)}
//       </InfiniteScrollGrid>
//     </div>
//   </SoundVastTitle>
// );

// Radios.propTypes = {
//   radios: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       artist: PropTypes.string,
//       coverImageUrl: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   fetchRadios: PropTypes.func.isRequired,
//   hasMore: PropTypes.bool.isRequired,
// };

// export default Radio;
