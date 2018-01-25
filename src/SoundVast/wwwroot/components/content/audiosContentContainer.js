import { connect } from 'react-redux';
import { compose } from 'recompose';

import AudiosContent from './audiosContent';

const mapStateToProps = ({ audio }) => ({
  showingSideBar: audio.showingSideBar,
});

export default compose(
  connect(mapStateToProps),
)(AudiosContent);
