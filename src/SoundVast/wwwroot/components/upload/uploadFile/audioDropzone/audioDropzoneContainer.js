import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles, removeAudioFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles.map(x => ({
    id: x.id,
    title: x.title,
    preview: x.previewCoverImageUrl,
    progressPercent: x.progressPercent,
  })),
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeFile: removeAudioFile,
})(AudioDropzone);
