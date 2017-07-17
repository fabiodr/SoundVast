import { compose, withContext } from 'recompose';
import PropTypes from 'prop-types';

export default component => compose(
  withContext({
    index: PropTypes.number,
  }, ({ index }) => ({ index }),
)(component));
