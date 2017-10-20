import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles } from '../../actions';

const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles,
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
})(AudioDropzone);
