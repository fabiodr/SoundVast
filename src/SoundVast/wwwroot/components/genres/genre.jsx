import React from 'react';
import PropTypes from 'prop-types';

import styles from './genre.less';
import ImageButton from '../shared/button/imageButton';
import CoverImage from '../audio/coverImageContainer';

const Genre = ({ onClick, name, coverImages }) => (
  <ImageButton className={styles.genre} styleName="secondary" onClick={onClick}>
    <CoverImage name={name} coverImages={coverImages} />
    <div>{name}</div>
  </ImageButton>
);

Genre.defaultProps = {
  coverImages: null,
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  coverImages: PropTypes.arrayOf(
    PropTypes.shape({
      dimention: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};

export default Genre;
