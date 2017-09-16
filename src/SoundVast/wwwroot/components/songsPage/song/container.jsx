import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { actions } from 'react-jplaylist';

import Song from './component';
import { playlistId } from '../../shared/utilities/constants';

const handlers = {
  songPlayOnClick: props => () => props.dispatch(actions.play(playlistId, props.index)),
};

export default compose(
  connect(),
  withHandlers(handlers),
)(Song);
