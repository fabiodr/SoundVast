import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './artists.less';
import convertArtistsToString from '../shared/utilities/convertArtistsToString';

const Artists = ({ artists, className }) => (
  artists.length ? (
    <div className={classnames(styles.artists, className)}>
      {convertArtistsToString(artists)}
    </div>
  ) : null
);

Artists.defaultProps = {
  artists: [],
  className: null,
};

Artists.propTypes = {
  className: PropTypes.string,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default Artists;
