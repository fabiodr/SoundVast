import { connect } from 'react-redux';

import SpinnerButton from '../../spinners/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

export default connect(mapStateToProps)(SpinnerButton);
