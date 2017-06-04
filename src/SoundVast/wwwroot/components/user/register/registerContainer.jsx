import { connect } from 'react-redux';

import { submit } from './form/formActions';
import RegisterForm from './register';

export default connect(null, {
  submit: (values, dispatch) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    dispatch(submit(formData));
  },
})(RegisterForm);
