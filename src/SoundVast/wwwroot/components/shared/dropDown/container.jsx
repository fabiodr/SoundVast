import { withState } from 'recompose';

import LinkDropdown from './linkDropdown';

export default withState('isDropdownVisible', 'setDropdownVisibility', false)(LinkDropdown);
