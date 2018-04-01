import React from 'react';
import PropTypes from 'prop-types';

import styles from './genre.less';
import ImageButton from '../shared/button/imageButton';
import CoverImage from '../audio/coverImageContainer';

const Genre = ({ onClick, name, coverImageUrl }) => (
  <ImageButton className={styles.genre} styleName="secondary" onClick={onClick}>
    <CoverImage name={name} coverImageUrl={coverImageUrl} />
    <div>{name}</div>
  </ImageButton>
);

Genre.defaultProps = {
  coverImageUrl: null,
};

Genre.propTypes = {
  name: PropTypes.string.isRequired,
  coverImageUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Genre;
