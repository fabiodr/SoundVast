import React from 'react';
import PropTypes from 'prop-types';

import styles from './audiosHeader.less';
import FilterText from './filterTextContainer';

const AudiosHeader = ({ audioTypeText }) => (
  <div className={styles.audiosHeader}>
    <FilterText audioTypeText={audioTypeText} />
  </div>
);

AudiosHeader.propTypes = {
  audioTypeText: PropTypes.string.isRequired,
};

export default AudiosHeader;
