import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AirbnbPropTypes from 'airbnb-prop-types';

import PauseIcon from '../icons/pause';
import PlayIcon from '../icons/play';
import styles from './play.less';
import CoverImage from '../audio/coverImage';

class Play extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.paused) {
      this.setState({ hasPlayed: true });
    }
  }
  render() {
    const className = classNames({
      [styles.currentlyPlayed]: this.props.isCurrent && this.state.hasPlayed,
    });

    return (
      <div role="button" tabIndex={0} onClick={this.props.onClick} className={classNames(className, styles.play)}>
        {this.props.children}
        {(this.props.paused || !this.props.isCurrent) ? <PlayIcon className={styles.playIcon} data-role="hover" />
          : <PauseIcon className={styles.pauseIcon} data-role="hover" /> }
      </div>
    );
  }
}

Play.propTypes = {
  children: AirbnbPropTypes.elementType(CoverImage).isRequired,
  onClick: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool.isRequired,
  paused: PropTypes.bool.isRequired,
};


export default Play;
