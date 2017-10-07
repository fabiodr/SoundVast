import { connect } from 'react-redux';

import SpinnerButton from '../../spinners/button/component';

const mapStateToProps = ({ form }, { formName }) => ({
  isSubmitting: form[formName].isSubmitting,
});

export default connect(mapStateToProps)(SpinnerButton);
