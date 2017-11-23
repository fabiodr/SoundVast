import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PauseIcon from '../icons/pause';
import PlayIcon from '../icons/play';
import styles from './play.less';

class Play extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.paused) {
      this.setState({ hasPlayed: true });
    }
  }
  playOnClick = () => {
    const jPlaylistId = 'FooterPlaylist';

    if (this.props.playlist.length === 0) {
      this.props.setPlaylist('FooterPlaylist', this.props.playlist);
    }

    if (this.props.paused || !this.props.isCurrent) {
      const index = this.props.playlist.findIndex(x => x.id === this.props.id);

      this.props.play(jPlaylistId, index);
    } else {
      this.props.pause(jPlaylistId);
    }
  }
  render() {
    const className = classNames(styles.playIcon, {
      [styles.currentlyPlayed]: this.props.isCurrent && this.props.hasPlayed,
    });

    return (
      <button onClick={this.playOnClick} className={styles.play}>
        {this.props.children}
        {(this.props.paused || !this.props.isCurrent) ? <PlayIcon className={className} data-role="hover" />
          : <PauseIcon className={styles.pauseIcon} data-role="hover" /> }
      </button>
    );
  }
}

Play.defaultProps = {
  hasPlayed: false,
};

Play.propTypes = {
  children: PropTypes.node.isRequired,
  setPlaylist: PropTypes.func.isRequired,
  play: PropTypes.func.isRequired,
  pause: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  playlist: PropTypes.arrayOf(PropTypes.object).isRequired,
  isCurrent: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
  hasPlayed: PropTypes.bool,
};


export default Play;
