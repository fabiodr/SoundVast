import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import ImageDropzone from '../../../shared/imageDropzone/imageDropzone';
import { uploadCoverImage, removeCoverImage } from '../../actions';

const handlers = {
  onDrop: ({ dispatch, id }) => (files) => {
    dispatch(uploadCoverImage(id, files[0]));
  },
};

const enhance = compose(
  setPropTypes({
    id: PropTypes.string.isRequired,
  }),
  connect(null, {
    // TODO: Implement in component
    removeFile: removeCoverImage,
  }),
  withHandlers(handlers),
);

export default enhance(ImageDropzone);
