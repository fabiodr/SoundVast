import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const AudiosContent = ({ children, showingSideBar }) => (
  <div className={classnames(showingSideBar && 'showing-side-bar')}>
    {children}
  </div>
);

AudiosContent.defaultProps = {
  showingSideBar: true,
};

AudiosContent.propTypes = {
  children: PropTypes.node.isRequired,
  showingSideBar: PropTypes.bool,
};

export default AudiosContent;
