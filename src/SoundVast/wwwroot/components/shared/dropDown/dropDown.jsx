import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './dropdown.less';

const Dropdown = ({
  children,
  className,
  setDropdownVisibility,
  isDropdownVisible,
  titleCallback,
}) => (
  <div
    onBlur={() => setDropdownVisibility(false)}
    className={classnames(styles.dropdown, className)}
  >
    {titleCallback(() => setDropdownVisibility(!isDropdownVisible))}
    {isDropdownVisible ?
      <div
        role="button"
        tabIndex={0}
        onMouseDown={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onClick={() => setDropdownVisibility(false)}
      >
        {children}
      </div>
      : null}
  </div>
);

Dropdown.defaultProps = {
  className: null,
};

Dropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  setDropdownVisibility: PropTypes.func.isRequired,
  isDropdownVisible: PropTypes.bool.isRequired,
  titleCallback: PropTypes.func.isRequired,
};

export default Dropdown;
