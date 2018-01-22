import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'found';

import Search from './search';

const handlers = {
  onSubmit: ({ router, match }) => (searchQuery) => {
    const searchRoutes = [
      'songs/', 'artists/', 'albums/', 'radios/',
    ];
    const isOnSearchRoute = searchRoutes.some(searchRoute =>
      match.location.pathname.contains(searchRoute));

    router.push({
      pathname: isOnSearchRoute ? match.location.pathname : '/songs',
      query: {
        searchQuery,
      },
    });
  },
};

export default compose(
  withRouter,
  withHandlers(handlers),
  reduxForm({
    form: 'search',
  }),
)(Search);
