import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import ImageDropzone from '../../../shared/imageDropzone/imageDropzone';
import { previewImage } from '../../actions';

const handlers = {
  onDrop: ({ dispatch, id, change }) => (files) => {
    change('coverImage', files[0]);
    dispatch(previewImage(id, files[0]));
  },
};

const enhance = compose(
  setPropTypes({
    id: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
  }),
  connect(),
  // TODO: Implement removeCoverImage in component
  withHandlers(handlers),
);

export default enhance(ImageDropzone);
