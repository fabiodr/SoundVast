import { connect } from 'react-redux';

import ImageDropzone from './component';
import { updateCoverImageFile, removeCoverImageFile } from '../../actions';

export const mapStateToProps = ({ upload }, { index }) => ({
  preview: upload.audioFiles[index].coverImagePreview,
});

export default connect(mapStateToProps, {
  onDrop: (file, index) => updateCoverImageFile(file, index),
  removeFile: removeCoverImageFile,
})(ImageDropzone);
