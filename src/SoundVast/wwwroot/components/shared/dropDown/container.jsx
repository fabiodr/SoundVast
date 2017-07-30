import { withState } from 'recompose';

import LinkDropdown from './component';

export default withState('isDropdownVisible', 'setDropdownVisibility', false)(LinkDropdown);
