import { reduxForm } from 'redux-form';
import { compose } from 'recompose';

import CommentBox from './commentBox';

export default compose(
  reduxForm({
    form: 'commentBox',
  }),
)(CommentBox);
