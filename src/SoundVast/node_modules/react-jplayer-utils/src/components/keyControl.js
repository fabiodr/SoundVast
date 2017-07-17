import React from 'react';
import PropTypes from 'prop-types';

import connectWithId from '../connectWithId';
import keyIgnoredElementNames from '../keyIgnoredElementNames';

const onKeyDown = (keyEnabled, focused, keyBindings, event) => {
  if (keyIgnoredElementNames.some(name => name.toUpperCase()
      === event.target.nodeName.toUpperCase()) || !focused || !keyEnabled) {
    return;
  }

  Object.keys(keyBindings).forEach((key) => {
    const keyBinding = keyBindings[key];

    if (keyBinding.key === event.keyCode || keyBinding.key === event.key) {
      event.preventDefault();
      keyBinding.fn();
    }
  });
};

const mapStateToProps = ({ jPlayers, jPlaylists }, { id }) => ({
  keyEnabled: jPlayers[id].keyEnabled,
  focused: jPlayers[id].focused,
});

class KeyControl extends React.Component {
  componentWillMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  onKeyDown = event => onKeyDown(
    this.props.keyEnabled,
    this.props.focused,
    this.props.keyBindings,
    event,
  )
  render() {
    return null;
  }
}

KeyControl.propTypes = {
  keyEnabled: PropTypes.bool.isRequired,
  focused: PropTypes.bool.isRequired,
  keyBindings: PropTypes.object.isRequired,
};

export default connectWithId(mapStateToProps)(KeyControl);
