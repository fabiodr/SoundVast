import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles, removeAudioFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles.map(x => ({
    key: x.key,
    preview: x.preview,
    name: x.name,
  })),
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeFile: removeAudioFile,
})(AudioDropzone);
