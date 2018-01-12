import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './artists.less';
import convertArtistsToString from '../shared/utilities/convertArtistsToString';

const Artists = ({ artists, className }) => {
  const artistsString = convertArtistsToString(artists);

  return (
    artistsString && (
      <div
        title={artistsString}
        className={classnames(styles.artists, className)}
      >
        {artistsString}
      </div>
    )
  );
};

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
