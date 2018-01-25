import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './audiosContent.less';

const AudiosContent = ({ children, showingSideBar }) => (
  <div className={classnames(styles.audioContent, showingSideBar && 'showing-side-bar')}>
    {children}
  </div>
);

AudiosContent.propTypes = {
  children: PropTypes.node.isRequired,
  showingSideBar: PropTypes.bool.isRequired,
};

export default AudiosContent;
