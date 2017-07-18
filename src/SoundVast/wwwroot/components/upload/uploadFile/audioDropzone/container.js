import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles, removeAudioFile } from '../../actions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles.map(file => ({
    id: file.id,
    title: file.title,
    preview: file.coverImagePreview,
    progress: file.progress,
  })),
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeFile: removeAudioFile,
})(AudioDropzone);
