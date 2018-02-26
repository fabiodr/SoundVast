import { compose, branch, renderComponent } from 'recompose';
import { connect } from 'react-redux';

import Header from './header';
import withDisplayType from '../shared/withDisplayType';
import MobileHeader from './mobileHeader';

const mapStateToProps = ({ app }) => ({
  userName: app.user.userName,
});

const enhance = compose(
  connect(mapStateToProps),
  withDisplayType,
  branch(
    ({ displayType }) => displayType.isMobile,
    renderComponent(MobileHeader),
  ),
);

const HeaderContainer = enhance(Header);

export default HeaderContainer;
