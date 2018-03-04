import { connect } from 'react-redux';
import { compose } from 'recompose';

import CoverImage from './coverImage';

const mapStateToProps = ({ app }) => ({
  imagePlaceholderUrl: app.imagePlaceholderUrl,
});

export default compose(
  connect(mapStateToProps),
)(CoverImage);
