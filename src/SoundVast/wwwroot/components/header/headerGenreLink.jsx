import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';

const HeaderGenreLink = ({ genresLocationInformation }) => (
  <LinkButton
    to={genresLocationInformation}
    styleName="secondary"
    className={styles.navButton}
  >
    Genres
  </LinkButton>
);

HeaderGenreLink.propTypes = {
  genresLocationInformation: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default HeaderGenreLink;
