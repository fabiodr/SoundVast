import React from 'react';
import PropTypes from 'prop-types';

import styles from './imageOption.less';

const ImageOption = ({
  onMouseDown,
  onMouseEnter,
  onMouseMove,
  option,
  children,
}) => (
  <div
    role="button"
    tabIndex={0}
    onMouseDown={onMouseDown}
    onMouseEnter={onMouseEnter}
    onMouseMove={onMouseMove}
    className={styles.imageOption}
  >
    {option.imageOptionUrl && (
      <div className={styles.imageContainer}>
        <img alt="" src={option.imageOptionUrl} />
      </div>
    )}
    <div>
      {children}
    </div>
  </div>
);

ImageOption.propTypes = {
  onMouseDown: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  option: PropTypes.shape({
    imageOptionUrl: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default ImageOption;
