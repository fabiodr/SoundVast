import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import FilterText from './filterText';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const getQueryFilterLabel = (match) => {
  const queryFilterLabels = [
    normalizeBoolean(match.location.query.newest) && 'newest',
    normalizeBoolean(match.location.query.topRated) && 'top rated',
    normalizeBoolean(match.location.query.mostCommented) && 'most commented',
    normalizeBoolean(match.location.query.mostPlayed) && 'most played',
  ];

  const queryFilterLabel = queryFilterLabels.find(x => x);

  return queryFilterLabel;
};

const createProps = ({
  match,
}) => {
  const queryFilterLabel = getQueryFilterLabel(match);

  return {
    queryFilterLabel,
    genreLabel: match.params.genre,
    hasDateFrom: !!match.location.query.dateFrom,
    hasDateTo: !!match.location.query.dateTo,
  };
};

export default compose(
  withRouter,
  withProps(createProps),
)(FilterText);
