import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import LinkButton from '../../shared/button/linkButton';
import styles from './userButton.less';

const UserButton = ({ userName, contributionScore, className }) => (
  <LinkButton
    to="/profile"
    className={classnames(styles.userButton, className)}
    styleName="secondary"
    title="Your Profile"
  >
    {userName}
    <div className={styles.contribution}>
      <span className={styles.contributionScore}>{contributionScore}</span>
      <span className={styles.contributionText}>reputation</span>
    </div>
  </LinkButton>
);

UserButton.defaultProps = {
  className: null,
};

UserButton.propTypes = {
  userName: PropTypes.string.isRequired,
  contributionScore: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default UserButton;
