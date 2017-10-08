import { connect } from 'react-redux';

import ImageDropzone from './component';
import { updateCoverImage, removeCoverImage } from '../../actions';

export default connect(null, {
  onDrop: (file, id) => updateCoverImage(id, file),
  // TODO: Implement in component
  removeFile: removeCoverImage,
})(ImageDropzone);
