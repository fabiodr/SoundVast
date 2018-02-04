import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from './button';
import styles from './imageButton.less';

const ImageButton = ({ children, onClick, className, ...props }) => (
  <Button onClick={onClick} className={classnames(styles.imageButton, className)} {...props}>
    {children}
    <div className={styles.imageOverlay} />
  </Button>
);

ImageButton.defaultProps = {
  className: null,
};

ImageButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ImageButton;
