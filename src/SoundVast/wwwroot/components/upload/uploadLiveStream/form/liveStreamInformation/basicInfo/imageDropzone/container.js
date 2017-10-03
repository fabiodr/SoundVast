import { connect } from 'react-redux';

import ImageDropzone from '../../../../../common/imageDropzone/component';
import { updateCoverImageFile, removeCoverImageFile } from '../../../../../actions';

const mapStateToProps = ({ upload }, { id }) => ({
  preview: upload.coverImageFiles[id].preview,
});

export default connect(mapStateToProps, {
  onDrop: (file, id) => updateCoverImageFile(file, id),
  removeFile: removeCoverImageFile,
})(ImageDropzone);
