import React from 'react';
import PropTypes from 'prop-types';

import styles from './component.less';

const LinkDropdown = ({ children, title, setDropdownVisibility, isDropdownVisible }) => (
  <div className={styles.linkDropdown}>
    <button onClick={() => setDropdownVisibility(!isDropdownVisible)}>
      <span>{title}</span>
    </button>
    {isDropdownVisible ?
      <ul>
        {children}
      </ul>
    : null}
  </div>
);

LinkDropdown.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  setDropdownVisibility: PropTypes.func.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
};

export default LinkDropdown;
