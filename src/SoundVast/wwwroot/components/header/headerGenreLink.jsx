import React from 'react';
import PropTypes from 'prop-types';

import LinkButton from '../shared/button/linkButton';
import styles from './header.less';

const HeaderGenreLink = ({ genresLocationInformation, title, children }) => (
  <LinkButton
    to={genresLocationInformation}
    styleName="secondary"
    className={styles.navButton}
    title={title}
  >
    {children}
  </LinkButton>
);

HeaderGenreLink.defaultProps = {
  title: null,
};

HeaderGenreLink.propTypes = {
  children: PropTypes.node.isRequired,
  genresLocationInformation: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string,
};

export default HeaderGenreLink;
