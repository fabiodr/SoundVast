import { compose, withStateHandlers } from 'recompose';

import Dropdown from './dropdown';

const stateHandlers = {
  setDropdownVisibility: () => visibile => ({
    isDropdownVisible: visibile,
  }),
};

export default compose(
  withStateHandlers({
    isDropdownVisible: false,
  }, stateHandlers),
)(Dropdown);
