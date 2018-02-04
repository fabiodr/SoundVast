import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'found';

import Filters from './filters';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const handlers = {
  filter: ({ router, match }) => (filter, values = {}) => {
    const { newest, mostCommented, mostPlayed, topRated, ...queries } = match.location.query;

    router.push({
      pathname: match.location.pathname,
      query: {
        ...queries,
        [filter]: true,
        dateFrom: values.dateFrom,
      },
    });
  },
};

const createProps = ({ match }) => ({
  topRated: normalizeBoolean(match.location.query.topRated),
  mostCommented: normalizeBoolean(match.location.query.mostCommented),
  mostPlayed: normalizeBoolean(match.location.query.mostPlayed),
  dateFrom: match.location.query.dateFrom,
});

export default compose(
  withRouter,
  withHandlers(handlers),
  withProps(createProps),
)(Filters);
