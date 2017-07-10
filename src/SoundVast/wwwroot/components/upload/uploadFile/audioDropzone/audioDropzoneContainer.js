import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles, removeAudioFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles.map(file => ({
    id: file.id,
    title: file.title,
    preview: file.previewCoverImageUrl,
    progress: file.progress,
  })),
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeFile: removeAudioFile,
})(AudioDropzone);
