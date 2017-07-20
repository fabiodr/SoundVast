import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import Music from './music';
import { getMusic } from './actions';

const mapStateToProps = ({ music }) => ({
  musicAudios: music.musicAudios,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(getMusic());
    },
  }),
)(Music);
