import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';
import styles from './sideBar.less';
import Name from '../audio/name';

const SideBar = ({ audio, isFixed }) => (
  <div className={classnames(styles.sideBar, isFixed && styles.fixedSideBar)}>
    <Name name={audio.name} className={styles.name} />
    <div>
      <div className={styles.commentBox}>
        {/* https://github.com/erikras/redux-form/issues/2886 */}
        <CommentBox audio={audio} form="commentBox" key="commentBox" />
      </div>
      <Comments audio={audio} />
    </div>
  </div>
);

SideBar.defaultProps = {
  isFixed: false,
};

SideBar.propTypes = {
  audio: PropTypes.shape({
    audioId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  isFixed: PropTypes.bool,
};

export default SideBar;
