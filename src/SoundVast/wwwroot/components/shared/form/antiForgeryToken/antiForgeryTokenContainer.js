import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import { generateAntiForgeryToken } from '../formActions';
import AntiForgeryToken from './antiForgeryToken';

const mapStateToProps = ({ form }) => ({
  antiForgeryToken: form.antiForgeryToken,
});

export default compose(
  connect(mapStateToProps),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(generateAntiForgeryToken());
    },
  }),
)(AntiForgeryToken);
