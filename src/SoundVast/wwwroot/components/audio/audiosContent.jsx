import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const AudiosContent = ({ children, showingSideBar }) => (
  <div className={classnames(showingSideBar && 'showing-side-bar')}>
    {children}
  </div>
);

AudiosContent.propTypes = {
  children: PropTypes.node.isRequired,
  showingSideBar: PropTypes.bool.isRequired,
};

export default AudiosContent;
