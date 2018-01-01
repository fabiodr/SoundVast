import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import Search from './search';

const handlers = {
  onSubmit: () => () => {

  },
};

export default compose(
  withHandlers(handlers),
  reduxForm({
    form: 'search',
  }),
)(Search);
