import PropTypes from 'prop-types';
import { compose, withHandlers, withProps, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import Filters from './filters';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const propTypes = {
  genresUrl: PropTypes.string.isRequired,
};

const handlers = {
  filter: ({ router, match }) => (filter, values) => {
    const locationInformation = {
      pathname: match.location.pathname,
      query: {
        [filter]: true,
      },
    };

    if (Array.isArray(values)) {
      locationInformation.query.dateFrom = values[0];
      locationInformation.query.dateTo = values[1];
    }

    router.push(locationInformation);
  },
  genresOnClick: ({ router, match, genresUrl }) => () => {
    router.push({
      pathname: genresUrl,
      state: {
        filterQueries: {
          newest: match.location.query.newest,
          topRated: match.location.query.topRated,
          mostCommented: match.location.query.mostCommented,
          mostPlayed: match.location.query.mostPlayed,
          dateFrom: match.location.query.dateFrom,
          dateTo: match.location.query.dateTo,
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
