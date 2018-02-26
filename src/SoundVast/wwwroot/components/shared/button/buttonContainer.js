import { connect } from 'react-redux';
import { compose, withHandlers, defaultProps, setPropTypes, mapProps } from 'recompose';
import PropTypes from 'prop-types';

import Button from './button';
import { showModal } from '../modal/actions';

const mapStateToProps = ({ app }) => ({
  isAuthorized: !!app.user.userId,
});

const handlers = ({
  onClick: ({ onClick, dispatch, authRequired, isAuthorized }) => (e, ...args) => {
    if (authRequired && !isAuthorized) {
      dispatch(showModal('login'));
      e.preventDefault();
    } else {
      onClick(e, ...args);
    }
  },
});

const propsMapper = ({ isAuthorized, dispatch, authRequired, ...props }) => ({
  ...props,
});

export default compose(
  defaultProps({
    onClick: Function.prototype,
  }),
  setPropTypes({
    onClick: PropTypes.func,
    authRequired: PropTypes.bool,
  }),
  connect(mapStateToProps),
  withHandlers(handlers),
  mapProps(propsMapper),
)(Button);
