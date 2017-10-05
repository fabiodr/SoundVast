import { connect } from 'react-redux';
import { compose, flattenProp } from 'recompose';

import ImageDropzone from './component';
import { updateCoverImageFile, removeCoverImageFile } from '../../actions';

const mapStateToProps = ({ upload }, { id }) => ({
  coverImageFile: upload.coverImageFiles[id],
});

export default compose(
  connect(mapStateToProps, {
    onDrop: (file, id) => updateCoverImageFile(file, id),
    removeFile: removeCoverImageFile,
  }),
  flattenProp('coverImageFile'),
)(ImageDropzone);
