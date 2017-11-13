import { withState } from 'recompose';

import LinkDropdown from './dropDown';

export default withState('isDropdownVisible', 'setDropdownVisibility', false)(LinkDropdown);
