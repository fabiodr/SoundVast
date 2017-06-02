import React from 'react';
import PropTypes from 'prop-types';

const AntiForgeryToken = ({ antiForgeryToken }) =>
  <input type="hidden" name="__RequestVerificationToken" value={antiForgeryToken} />;

AntiForgeryToken.defaultProps = {
  antiForgeryToken: '',
};

AntiForgeryToken.propTypes = {
  antiForgeryToken: PropTypes.string,
};

export default AntiForgeryToken;
