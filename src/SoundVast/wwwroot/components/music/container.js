import { connect } from 'react-redux';

import Music from './music';
import { fetchMusic } from './actions';

const mapStateToProps = ({ music }) => ({
  hasMore: music.hasMore,
});

const mapDispatchToProps = dispatch => ({
  fetchMusic: () => dispatch(fetchMusic()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Music);
