import React from 'react';
import PropTypes from 'prop-types';

import Button from '../shared/button/button';
import FormattedNumberText from '../shared/numbers/formattedNumberText';

const LoadReplyButton = ({ text, onClick, repliesCount }) => (
  <Button onClick={onClick}>
    {text} <FormattedNumberText number={repliesCount} singularText="reply" pluralText="replies" />
  </Button>
);

LoadReplyButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  repliesCount: PropTypes.number.isRequired,
};

export default LoadReplyButton;
