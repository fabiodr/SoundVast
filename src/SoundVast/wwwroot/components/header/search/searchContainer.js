import { reduxForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'found';

import Search from './search';

const handlers = {
  onSubmit: ({ router, match }) => ({ search }) => {
    const searchRoutes = [
      'radios/',
    ];
    const isOnAudioRoute = searchRoutes.some(searchRoute =>
      match.location.pathname.includes(searchRoute));

    router.push({
      pathname: isOnAudioRoute ? match.location.pathname : '/',
      query: {
        ...match.location.query,
        searchQuery: search,
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
