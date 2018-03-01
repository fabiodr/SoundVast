import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, flattenProp, setPropTypes } from 'recompose';

import PreviewImage from '../../../shared/previewImage/previewImage';

const mapStateToProps = ({ app, upload }, { id }) => ({
  coverImage: upload.coverImages[id],
  imagePlaceholderUrl: app.imagePlaceholderUrl,
});

const propTypes = {
  id: PropTypes.string.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  flattenProp('coverImage'),
)(PreviewImage);
