import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { uploadAudioFiles, removeAudioFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.audioFiles.map(x => ({
    key: x.key,
    title: x.title,
    preview: x.previewCoverImageUrl,
  })),
});

export default connect(mapStateToProps, {
  onDrop: uploadAudioFiles,
  removeFile: removeAudioFile,
})(AudioDropzone);
