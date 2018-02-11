import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import HeaderGenreLink from './headerGenreLink';

const createProps = ({ match }) => ({
  genresLocationInformation: {
    pathname: '/genres',
    state: {
      queries: {
        ...match.location.query,
      },
    },
  },
});

export default compose(
  withRouter,
  withProps(createProps),
)(HeaderGenreLink);
