import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './component';
import uploadValidation from '../../validation';
import { submitFiles } from '../../actions';

const mapDispatchToProps = (dispatch, { index }) => ({
  onSubmit: values => dispatch(submitFiles(values, index)),
});

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);
