import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import Genre from './genre';

const propTypes = {
  url: PropTypes.string.isRequired,
};

const handlers = {
  onClick: ({ match, router, url }) => () => {
    const locationInformation = {
      pathname: url,
    };

    if (match.location.state) {
      locationInformation.query = match.location.state.filterQueries;
    }

    router.push(locationInformation);
  },
};

export default compose(
  setPropTypes(propTypes),
  withRouter,
  withHandlers(handlers),
)(Genre);
