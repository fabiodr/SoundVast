import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './name.less';

const Name = ({ name, className }) => (
  <div title={name} className={classnames(styles.name, className)}>{name}</div>
);

Name.defaultProps = {
  className: null,
};

Name.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Name;
