import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, withHandlers, setPropTypes } from 'recompose';

import Like from '../../../rating/like/component';
import { rateSong } from '../../actions';

const mapStateToProps = ({ music }, { id }) => ({
  likes: Object.values(music.ratings).filter(x => x.audioId === id && x.liked).length,
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
