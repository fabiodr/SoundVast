import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import Filters from './filters';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const propTypes = {
  genresUrl: PropTypes.string.isRequired,
};

const handlers = {
  filter: ({ router, match }) => (filter, values = {}) => {
    const { newest, mostCommented, mostPlayed, topRated, ...queries } = match.location.query;

    router.push({
      pathname: match.location.pathname,
      query: {
        ...queries,
        [filter]: true,
        dateFrom: values.dateFrom,
        dateTo: values.dateTo,
      },
    });
  },
  genresOnClick: ({ router, match, genresUrl }) => () => {
    router.push({
      pathname: genresUrl,
      state: {
        queries: {
          ...match.location.query,
        },
      },
    });
  },
};

const createProps = ({ match }) => ({
  topRated: normalizeBoolean(match.location.query.topRated),
  mostCommented: normalizeBoolean(match.location.query.mostCommented),
  mostPlayed: normalizeBoolean(match.location.query.mostPlayed),
  dateFrom: match.location.query.dateFrom,
  dateTo: match.location.query.dateTo,
});

export default compose(
  setPropTypes(propTypes),
  withRouter,
  withHandlers(handlers),
  withProps(createProps),
)(Filters);
