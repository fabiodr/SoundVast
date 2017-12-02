import { compose, withHandlers } from 'recompose';
import { withRouter } from 'found';

import filters from './filters';

const handlers = {
  filter: ({ router, match }) => (filter, value) => {
    router.push({
      pathname: match.location.pathname,
      query: {
        [filter]: value,
      },
    });
  },
};

export default compose(
  withRouter,
  withHandlers(handlers),
)(filters);
