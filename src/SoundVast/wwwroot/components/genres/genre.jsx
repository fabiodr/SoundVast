import React from 'react';
import PropTypes from 'prop-types';

import styles from './genres.less';
import Button from '../shared/button/button';

const Genre = ({ onClick, name, coverImageUrl }) => (
  <Button onClick={onClick}>
    <div className={styles.coverImageWrapper}>
      <img className={styles.coverImage} src={coverImageUrl} alt="" />
      <div>{name}</div>
    </div>
  </Button>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Genre;
