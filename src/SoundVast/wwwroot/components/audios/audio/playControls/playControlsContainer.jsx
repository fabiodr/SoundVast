import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, branch, setPropTypes, renderComponent, lifecycle } from 'recompose';

import Play from './play';
import Pause from './pause';

const mapStateToProps = ({ jPlayers }) => ({
  paused: jPlayers.FooterPlaylist.paused,
});

const propTypes = {
  isCurrent: PropTypes.bool.isRequired,
};

const lifecycleFunctions = {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.paused) {
      this.setState({ hasPlayed: true });
    }
  },
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  lifecycle(lifecycleFunctions),
  branch(
    props => props.paused || !props.isCurrent,
    renderComponent(Play),
  ),
)(Pause);
