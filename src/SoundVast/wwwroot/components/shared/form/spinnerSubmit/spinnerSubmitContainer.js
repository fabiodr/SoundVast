import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, setPropTypes, mapProps } from 'recompose';

import SpinnerButton from '../../button/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

const propTypes = {
  formName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const propsMapper = props => ({
  children: props.children,
});

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  mapProps(propsMapper),
)(SpinnerButton);
