import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import ToggleSideBar from './toggleSideBar';
import { showSideBar, hideSideBar } from './actions';

const mapStateToProps = ({ audio }) => ({
  showingSideBar: audio.showingSideBar,
});

export default compose(
  connect(mapStateToProps),
  withHandlers({
    onClick: ({ dispatch, showingSideBar }) => () => {
      if (showingSideBar) {
        dispatch(hideSideBar());
      } else {
        dispatch(showSideBar());
      }
    },
  }),
)(ToggleSideBar);
