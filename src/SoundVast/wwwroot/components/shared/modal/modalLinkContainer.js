import { connect } from 'react-redux';
import { compose, withHandlers, defaultProps, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

import ModalLink from './modalLink';
import { showModal } from './actions';

const handlers = {
  onClick: ({ onClick, modalId, variables, dispatch }) => (...args) => {
    dispatch(showModal(modalId, variables));

    onClick(...args);
  },
};

export default compose(
  setPropTypes({
    modalId: PropTypes.string.isRequired,
    variables: PropTypes.object,
    onClick: PropTypes.func,
  }),
  defaultProps({
    onClick: Function.prototype,
  }),
  connect(),
  withHandlers(handlers),
)(ModalLink);
