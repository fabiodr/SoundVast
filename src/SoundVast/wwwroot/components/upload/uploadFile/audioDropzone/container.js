import { connect } from 'react-redux';

import AudioDropzone from './component';
import { uploadAudioFiles, removeAudioFile } from '../../actions';

const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles,
  coverImageFiles: upload.coverImageFiles,
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeAudioFile,
})(AudioDropzone);
