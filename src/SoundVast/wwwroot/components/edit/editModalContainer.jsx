import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import EditModal from './editModal';
import audioValidation from '../shared/validation/audioValidation';

export default compose(
  reduxForm({
    form: 'edit',
    validate: audioValidation,
  }),
)(EditModal);
