import { compose, withHandlers } from 'recompose';
import { withRouter } from 'found';

import filters from './filters';

const handlers = {
  onChange: ({ router, match }) => (value) => {
    router.push({
      pathname: match.location.pathname,
      query: { topRated: value },
    });
  },
};

export default compose(
  withRouter,
  withHandlers(handlers),
)(filters);
