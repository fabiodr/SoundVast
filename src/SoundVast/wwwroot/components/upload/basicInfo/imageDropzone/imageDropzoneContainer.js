import { connect } from 'react-redux';

import ImageDropzone from './imageDropzone';
import { updateCoverImageFile, removeCoverImageFile } from '../../uploadActions';

export const mapStateToProps = ({ upload }, { index }) => ({
  preview: upload.audioFiles[index].previewCoverImageUrl,
});

export default connect(mapStateToProps, {
  onDrop: (file, index) => updateCoverImageFile(file, index),
  removeFile: removeCoverImageFile,
})(ImageDropzone);
