import React from 'react';
import PropTypes from 'prop-types';

import styles from './existingPlaylist.less';

const ExistingPlaylist = ({ coverImageUrl, name, onClick }) => (
  <div>
    {name}
    <div role="button" tabIndex={0} onClick={onClick}>
      <img alt="" src={coverImageUrl} className={styles.coverImage} />
    </div>
  </div>
);

ExistingPlaylist.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ExistingPlaylist;
