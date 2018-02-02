import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import ImageDropzone from '../../../shared/imageDropzone/imageDropzone';
import { uploadCoverImage } from '../../actions';

const handlers = {
  onDrop: ({ dispatch, id, change }) => files => dispatch(uploadCoverImage(id, files[0], change)),
};

const enhance = compose(
  setPropTypes({
    id: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
  }),
  // TODO: Implement removeCoverImage in component
  connect(),
  withHandlers(handlers),
);

export default enhance(ImageDropzone);
