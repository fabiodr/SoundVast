import { connect } from 'react-redux';
import { compose } from 'recompose';

import ImageDropzone from './imageDropzone';
import { uploadCoverImage, removeCoverImage } from '../../actions';

const enhance = compose(
  connect(null, {
    // TODO: Implement in component
    removeFile: removeCoverImage,
    onDrop: uploadCoverImage,
  }),
);

export default enhance(ImageDropzone);
