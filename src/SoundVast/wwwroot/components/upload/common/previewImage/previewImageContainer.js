import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, flattenProp, setPropTypes } from 'recompose';

import PreviewImage from './previewImage';

const mapStateToProps = ({ upload }, { id }) => ({
  coverImage: upload.coverImages[id],
});

const propTypes = {
  id: PropTypes.string.isRequired,
};

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  flattenProp('coverImage'),
)(PreviewImage);
