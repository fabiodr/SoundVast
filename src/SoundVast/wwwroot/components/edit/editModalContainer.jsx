import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import EditModal from './editModal';

export default compose(
  reduxForm({
    form: 'edit',
  }),
)(EditModal);
