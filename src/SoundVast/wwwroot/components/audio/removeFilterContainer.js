import { compose, withHandlers, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import { withRouter } from 'found';

import RemoveFilter from './removeFilter';

const propTypes = {
  name: PropTypes.string.isRequired,
};

export default compose(
  withRouter,
  setPropTypes(propTypes),
  withHandlers({
    onClick: ({ router, match, name }) => () => {
      const queries = { ...match.location.query };

      delete queries[name];

      router.push({
        pathname: match.location.pathname,
        query: {
          ...queries,
        },
      });
    },
  }),
)(RemoveFilter);
