import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import FlagModal from './flagModal';

export default compose(
  reduxForm({
    form: 'flag',
  }),
)(FlagModal);
