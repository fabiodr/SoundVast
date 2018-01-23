import PropTypes from 'prop-types';
import { compose, withHandlers, setPropTypes } from 'recompose';
import { withRouter } from 'found';

import Genre from './genre';

const propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const handlers = {
  onClick: ({ match, router, url, name }) => () => {
    const locationInformation = {
      pathname: url,
      query: {
        genre: name,
      },
    };

    if (match.location.state) {
      locationInformation.query = {
        ...match.location.state.queries,
        ...locationInformation.query,
      };
    }

    router.push(locationInformation);
  },
};

export default compose(
  setPropTypes(propTypes),
  withRouter,
  withHandlers(handlers),
)(Genre);
