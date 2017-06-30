import { connect } from 'react-redux';

import AudioDropzone from './audioDropzone';
import { addFiles, removeFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }) => ({
  files: upload.files,
});

export default connect(mapStateToProps, {
  onDrop: addFiles,
  removeFile,
})(AudioDropzone);
