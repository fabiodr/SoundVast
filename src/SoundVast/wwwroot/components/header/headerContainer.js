import { compose, branch, renderComponent, flattenProp } from 'recompose';
import { graphql } from 'react-relay';
import { fragmentContainer } from 'recompose-relay-modern';

import Header from './header';
import withDisplayType from '../shared/withDisplayType';
import MobileHeader from './mobileHeader';

const fragments = graphql`
  fragment headerContainer_user on ApplicationUser {
    userName
  }
`;

const enhance = compose(
  fragmentContainer(fragments),
  withDisplayType,
  flattenProp('user'),
  branch(
    ({ displayType }) => displayType.isMobile,
    renderComponent(MobileHeader),
  ),
);

const HeaderContainer = enhance(Header);

export default HeaderContainer;
