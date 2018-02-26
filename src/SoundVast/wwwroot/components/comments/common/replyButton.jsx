import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../shared/button/buttonContainer';
import styles from './replyButton.less';

const ReplyButton = ({ reply }) => (
  <Button
    className={styles.replyButton}
    onClick={reply}
    styleName="secondary"
  >
    Reply
  </Button>
);

ReplyButton.propTypes = {
  reply: PropTypes.func.isRequired,
};

export default ReplyButton;
