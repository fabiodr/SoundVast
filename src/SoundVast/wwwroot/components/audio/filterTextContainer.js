import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import FilterText from './filterText';
import normalizeBoolean from '../shared/utilities/normalizeBoolean';

const getQueryFilterLabel = (match) => {
  const queryFilterLabels = [
    { key: 'newest', label: normalizeBoolean(match.location.query.newest) && 'newest' },
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
  };
};

export default compose(
  withRouter,
  withProps(createProps),
)(FilterText);
