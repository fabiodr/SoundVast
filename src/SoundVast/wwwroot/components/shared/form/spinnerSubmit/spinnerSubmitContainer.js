import { connect } from 'react-redux';

import SpinnerButton from '../../spinners/button/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

export default connect(mapStateToProps)(SpinnerButton);
