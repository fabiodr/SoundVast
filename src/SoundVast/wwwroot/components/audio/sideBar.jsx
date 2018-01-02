import React from 'react';
import PropTypes from 'prop-types';

import CommentBox from '../comments/commentBoxContainer';
import Comments from '../comments/commentsContainer';
import styles from './sideBar.less';

const SideBar = ({ audioData, currentAudioId }) => {
  const newAudioId = currentAudioId || audioData.edges[0].node.audioId;
  const currentAudioEdge = audioData.edges.find(({ node }) => node.audioId === newAudioId);

  return (
    <div className={styles.sideBar}>
      <div>
        <CommentBox currentAudioId={newAudioId} />
        <Comments data={currentAudioEdge.node} />
      </div>
    </div>
  );
};

SideBar.defaultProps = {
  currentAudioId: null,
};

SideBar.propTypes = {
  audioData: PropTypes.shape({
    edges: PropTypes.arrayOf(
      PropTypes.shape({
        node: PropTypes.shape({
          audioId: PropTypes.number.isRequired,
        }),
      }),
    ),
  }).isRequired,
  currentAudioId: PropTypes.number,
};

export default SideBar;
