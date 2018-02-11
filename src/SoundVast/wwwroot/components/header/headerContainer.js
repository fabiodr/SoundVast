import { compose, branch, renderComponent } from 'recompose';

import Header from './header';
import withDisplayType from '../shared/withDisplayType';
import MobileHeader from './mobileHeader';

export default compose(
  withDisplayType,
  branch(
    ({ displayType }) => displayType.isMobile,
    renderComponent(MobileHeader),
  ),
)(Header);
