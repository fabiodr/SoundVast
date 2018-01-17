import { compose, withProps, renderNothing, branch } from 'recompose';
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

const createProps = ({
  match,
}) => {
  const currentFilterProps = getCurrentFilterProps(match);

  return {
    ...currentFilterProps,
  };
};

export default compose(
  withRouter,
  withProps(createProps),
  branch(
    ({ filter }) => !filter,
    renderNothing,
  ),
)(FilterText);
