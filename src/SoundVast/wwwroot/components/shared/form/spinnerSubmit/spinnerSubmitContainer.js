import { connect } from 'react-redux';

import SpinnerButton from '../../loaders/spinnerButton';

const mapStateToProps = ({ form }, { formName }) => ({
  isLoading: form[formName].submitting,
});

export default connect(mapStateToProps)(SpinnerButton);
