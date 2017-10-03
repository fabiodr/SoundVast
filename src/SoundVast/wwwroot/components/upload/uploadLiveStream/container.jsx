import { connect } from 'react-redux';

import UploadLiveStream from './component';
import { addLiveStream, removeLiveStream } from '../actions';

const mapStateToProps = ({ upload }) => ({
  liveStreams: upload.liveStreams,
});

export default connect(mapStateToProps, {
  addLiveStream,
  removeLiveStream,
})(UploadLiveStream);
