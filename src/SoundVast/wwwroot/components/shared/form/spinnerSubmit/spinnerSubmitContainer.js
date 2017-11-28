import { connect } from 'react-redux';

import SpinnerButton from '../../button/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

export default connect(mapStateToProps)(SpinnerButton);
