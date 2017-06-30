import { reduxForm } from 'redux-form';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import UploadFileForm from './form';
import { submit } from './formActions';

export const mapStateToProps = (_, { name }) => ({
  initialValues: {
    name: name.replace(/\.[^/.]+$/, ''),
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    return dispatch(submit(formData));
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // TODO: https://github.com/erikras/redux-form/issues/3048
  reduxForm({}),
)(UploadFileForm);
