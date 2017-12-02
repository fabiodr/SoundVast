import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import Filters from './filtersContainer';
import styles from './audioHeader.less';

const AudioHeader = ({ type }) => (
  <div className={styles.audioHeader}>
    <Link to={`/genres/${type}`}>Genres</Link>
    <Filters />
  </div>
);

AudioHeader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default AudioHeader;
