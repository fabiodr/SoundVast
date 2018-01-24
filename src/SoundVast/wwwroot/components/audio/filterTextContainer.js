import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import FilterText from './filterText';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const getQueryFilterLabel = (match) => {
  const queryFilterLabels = [
    { key: 'newest', label: normalizeBoolean(match.location.query.newest) && 'newest' },
    { key: 'topRated', label: normalizeBoolean(match.location.query.topRated) && 'top rated' },
    { key: 'mostCommented', label: normalizeBoolean(match.location.query.mostCommented) && 'most commented' },
    { key: 'mostPlayed', label: normalizeBoolean(match.location.query.mostPlayed) && 'most played' },
  ];

  const queryFilterLabel = queryFilterLabels.find(x => x.label);

  return queryFilterLabel;
};

const createProps = ({
  match,
}) => {
  const queryFilterDictionary = getQueryFilterLabel(match);

  return {
    queryFilterDictionary,
    genre: match.location.query.genre,
    searchQuery: match.location.query.searchQuery,
    hasDateFrom: !!match.location.query.dateFrom,
    hasDateTo: !!match.location.query.dateTo,
  };
};

export default compose(
  withRouter,
  withProps(createProps),
)(FilterText);
