import { compose, withStateHandlers } from 'recompose';

import Header from './header';

const stateHandlers = {
  searchOnFocus: () => () => ({
    searchExpanded: true,
  }),
  searchOnBlur: () => () => ({
    searchExpanded: false,
  }),
};

export default compose(
  withStateHandlers({
    searchExpanded: false,
  }, stateHandlers),
)(Header);
