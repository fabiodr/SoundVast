import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import ClearAllFilters from './clearAllFilters';

const createProps = ({ match }) => ({
  currentPathname: match.location.pathname,
});

export default compose(
  withRouter,
  withProps(createProps),
)(ClearAllFilters);
