import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Like from '../../../rating/like/component';
import { rateSong } from '../../actions';

const mapStateToProps = ({ music }, { id }) => ({
  // likes: Object.keys(music.ratings).filter(key => music.ratings[key].audioId === id &&
  // music.ratings[key].liked).length,
});

const handlers = {
  like: props => () => props.dispatch(rateSong(props.id, true)),
};

const propTypes = {
  id: PropTypes.number.isRequired,
};

export default compose(
  connect(mapStateToProps),
  setPropTypes(propTypes),
  withHandlers(handlers),
)(Like);
