import React from 'react';
import PropTypes from 'prop-types';

import styles from './audiosHeader.less';
import LinkButton from '../shared/button/linkButton';

const AudiosHeader = ({ typeUrl }) => (
  <div className={styles.audiosHeader}>
    <LinkButton to={`/genres/${typeUrl}`} styleName="secondary">Genres</LinkButton>
  </div>
);

AudiosHeader.propTypes = {
  typeUrl: PropTypes.string.isRequired,
};

export default AudiosHeader;
