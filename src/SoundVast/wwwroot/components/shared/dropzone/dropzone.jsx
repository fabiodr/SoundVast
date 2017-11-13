import React from 'react';
import PropTypes from 'prop-types';
import ReactDropzone from 'react-dropzone';
import classnames from 'classnames';

import styles from './dropzone.less';

const Dropzone = ({ className, children, title, ...props }) => (
  <ReactDropzone
    className={classnames(className, styles.dropzone)}
    {...props}
  >
    <div className={styles.placeholderContainer}>
      <div className={styles.placeholder}>
        {title}
      </div>
    </div>
    {children}
  </ReactDropzone>
);

Dropzone.defaultProps = {
  className: null,
  children: null,
  title: null,
};

Dropzone.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Dropzone;
