import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Rating from './component';

const mapStateToProps = ({ music }, { id }) => ({
  likes: music.ratings[id].filter()
});

const propTypes = {
  songId: PropTypes.number.isRequired,
};

export default compose(
  connect(mapStateToProps),
  setPropTypes(propTypes),
)(Rating);
