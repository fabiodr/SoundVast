import { compose, withProps, renderNothing, branch, withHandlers } from 'recompose';
import { withRouter } from 'found';

import FilterText from './filterText';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const getCurrentFilterProps = (match) => {
  const filtersProps = [
    { label: 'Top Rated', filter: normalizeBoolean(match.location.query.topRated) },
    { label: 'Most Commented', filter: normalizeBoolean(match.location.query.mostCommented) },
    { label: 'Most Played', filter: normalizeBoolean(match.location.query.mostPlayed) },
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

  return {
    ...currentFilterProps,
    dateFrom: match.location.query.dateFrom,
    dateTo: match.location.query.dateTo,
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
