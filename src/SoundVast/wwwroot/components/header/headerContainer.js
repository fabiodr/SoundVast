import { compose, withProps } from 'recompose';
import { withRouter } from 'found';

import Header from './header';

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
)(Header);
