import { compose, withHandlers, withProps } from 'recompose';
import { withRouter } from 'found';
import { graphql } from 'react-relay';
import { queryRenderer } from 'recompose-relay-modern';

import filters from './filters';
import daysBetween from '../shared/utilities/daysBetween';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const handlers = {
  filter: ({ router, match }) => (filter, values) => {
    const locationInformation = {
      pathname: match.location.pathname,
      query: {
        [filter]: true,
      },
    };

    if (Array.isArray(values)) {
      locationInformation.query.from = values[0];
      locationInformation.query.to = values[1];
    }

    router.push(locationInformation);
  },
  onAfterChange: ({ router, match }) => (values) => {
    router.push({
      pathname: match.location.pathname,
      query: {
        ...match.location.query,
        from: values[0],
        to: values[1],
      },
    });
  },
};

const createProps = ({ match, songs }) => ({
  topRated: normalizeBoolean(match.location.query.topRated),
  mostCommented: normalizeBoolean(match.location.query.mostCommented),
  mostPlayed: normalizeBoolean(match.location.query.mostPlayed),
  from: match.location.query.from && parseInt(match.location.query.from, 10),
  to: match.location.query.to && parseInt(match.location.query.to, 10),
  filterMax: songs.items.map((item) => {
    const days = daysBetween(item.dateAdded, Date.now());

    return Math.round(days * 1e0) / 1e0;
  }).shift(),
});

export default compose(
  queryRenderer(graphql`
    query filtersContainerQuery (
      $count: Int!
    ) {
      songs(
        first: $count
      ) {
        items {
          dateAdded
        }
      }
    }
  `, { count: 1 }),
  withRouter,
  withHandlers(handlers),
  withProps(createProps),
)(filters);
