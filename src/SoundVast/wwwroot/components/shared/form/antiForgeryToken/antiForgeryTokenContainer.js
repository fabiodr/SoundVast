import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { generateAntiForgeryToken } from '../formActions';
import AntiForgeryToken from './antiForgeryToken';

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(generateAntiForgeryToken(this.props.form));
    },
  }),
)(AntiForgeryToken);
