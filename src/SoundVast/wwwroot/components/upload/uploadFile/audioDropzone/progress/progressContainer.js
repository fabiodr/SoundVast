import { connect } from 'react-redux';

import Progress from './progress';

export const mapStateToProps = ({ upload }, { index }) => ({
  progressPercent: upload.audioFiles[index].progressPercent,
});

export default connect(mapStateToProps)(Progress);
