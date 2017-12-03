import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose, setPropTypes } from 'recompose';

import SpinnerButton from '../../button/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

export default compose(
  setPropTypes({
    formName: PropTypes.string.isRequired,
  }),
  connect(mapStateToProps),
)(SpinnerButton);
