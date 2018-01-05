import React from 'react';
import PropTypes from 'prop-types';

import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';
import styles from './sideBar.less';
import Name from '../audio/name';

const SideBar = ({ audios, currentAudioId, children }) => {
  const newAudioId = currentAudioId || audios[0].audioId;
  const currentAudioIndex = audios.findIndex(({ audioId }) => audioId === newAudioId);
  const audio = audios[currentAudioIndex];

  return (
    <div className={styles.sideBar}>
      <Name name={audio.name} />
      {children(currentAudioIndex)}
      <div>
        {/* https://github.com/erikras/redux-form/issues/2886 */}
        <CommentBox audio={audio} form="commentBox" key="commentBox" />
        <Comments audio={audio} />
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  currentAudioId: null,
  children: Function.prototype,
};

SideBar.propTypes = {
  audios: PropTypes.arrayOf(
    PropTypes.shape({
      audioId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  currentAudioId: PropTypes.number,
  children: PropTypes.func,
};

export default SideBar;
