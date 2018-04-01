import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'found';

import Filters from './filters';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const handlers = {
  filter: ({ router, match }) => (filter) => {
    const { newest, ...queries } = match.location.query;

    router.push({
      pathname: match.location.pathname,
      query: {
        ...queries,
        [filter]: true,
      },
    });
  },
};

const createProps = ({ match }) => ({
  newest: normalizeBoolean(match.location.query.newest),
});

export default compose(
  withRouter,
  withHandlers(handlers),
  withProps(createProps),
)(Filters);
