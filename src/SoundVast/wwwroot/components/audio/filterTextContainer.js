import { compose, withProps, renderNothing, branch, withHandlers } from 'recompose';
import { withRouter } from 'found';

import FilterText from './filterText';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const getCurrentFilterProps = (match) => {
  const filtersProps = [
    { label: 'top rated', filter: normalizeBoolean(match.location.query.topRated) },
    { label: 'most commented', filter: normalizeBoolean(match.location.query.mostCommented) },
    { label: 'most played', filter: normalizeBoolean(match.location.query.mostPlayed) },
  ];

  const filterProps = filtersProps.find(x => x.filter);

  return filterProps;
};

const handlers = {
  onAfterChange: ({ router, match }) => (values) => {
    router.push({
      pathname: match.location.pathname,
      query: {
        ...match.location.query,
        dateFrom: values[0],
        dateTo: values[1],
      },
    });
  },
};

const createProps = ({ match }) => {
  const currentFilterProps = getCurrentFilterProps(match);
  const dateFrom = new Date(match.location.query.dateFrom);
  const dateTo = new Date(match.location.query.dateTo);

  return {
    ...currentFilterProps,
    dateFromValues: {
      year: dateFrom.getUTCFullYear(),
      month: dateFrom.getUTCMonth(),
      date: dateFrom.getUTCDate(),
    },
    dateToValues: {
      year: dateTo.getUTCFullYear(),
      month: dateTo.getUTCMonth(),
      date: dateTo.getUTCDate(),
    },
  };
};

export default compose(
  withRouter,
  withHandlers(handlers),
  withProps(createProps),
  branch(
    ({ filter }) => !filter,
    renderNothing,
  ),
)(FilterText);
