import { connect } from 'react-redux';

import UploadLiveStream from './uploadLiveStream';
import { addLiveStream } from '../actions';

const mapStateToProps = ({ upload }) => ({
  liveStreams: upload.liveStreams,
});

export default connect(mapStateToProps, {
  addLiveStream,
})(UploadLiveStream);
