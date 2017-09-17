import { connect } from 'react-redux';
import { compose, branch, renderComponent, lifecycle } from 'recompose';

import Play from './play/component';
import Pause from './pause/component';

const mapStateToProps = ({ jPlayers }) => ({
  paused: jPlayers.FooterPlaylist.paused,
});

const lifecycleFunctions = {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.paused) {
      this.setState({ hasPlayed: true });
    }
  },
};

export default compose(
  connect(mapStateToProps),
  lifecycle(lifecycleFunctions),
  branch(
    props => props.paused || !props.isCurrent,
    renderComponent(Play),
  ),
)(Pause);
