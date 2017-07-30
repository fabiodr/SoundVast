import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

const SoundVastTitle = ({ title, ...props }) => (
  <DocumentTitle title={`${title} | SoundVast`} {...props} />
);

SoundVastTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SoundVastTitle;
