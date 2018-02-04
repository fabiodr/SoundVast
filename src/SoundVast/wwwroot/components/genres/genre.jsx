import React from 'react';
import PropTypes from 'prop-types';

import styles from './genres.less';
import ImageButton from '../shared/button/imageButton';
import CoverImage from '../audio/coverImage';

const Genre = ({ onClick, name, coverImageUrl }) => (
  <ImageButton className={styles.genre} styleName="secondary" onClick={onClick}>
    <CoverImage coverImageUrl={coverImageUrl} />
    <div>{name}</div>
  </ImageButton>
);

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Genre;
