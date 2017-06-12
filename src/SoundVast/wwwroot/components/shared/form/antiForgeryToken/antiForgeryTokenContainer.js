import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { generateAntiForgeryToken } from '../formActions';
import AntiForgeryToken from './antiForgeryToken';

AntiForgeryToken.propTypes = {
  form: PropTypes.string.isRequired,
};

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(generateAntiForgeryToken(this.props.form));
    },
  }),
)(AntiForgeryToken);
