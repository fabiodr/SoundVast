import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import ImageDropzone from './imageDropzone';
import { removeCoverImage } from '../../actions';
import uploadImageMutation from './uploadImageMutation';

const enhance = compose(
  connect(null, {
    // TODO: Implement in component
    removeFile: removeCoverImage,
  }),
  withHandlers({
    onDrop: () => uploadImageMutation,
  }),
);

export default enhance(ImageDropzone);
