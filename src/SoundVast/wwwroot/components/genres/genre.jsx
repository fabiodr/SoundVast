import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import styles from './genres.less';

const Genre = ({ name, coverImageUrl, url }) => (
  <Link to={url}>
    <div className={styles.coverImageWrapper}>
      <img className={styles.coverImage} src={coverImageUrl} alt="" />
      <div>{name}</div>
    </div>
  </Link>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Genre;
