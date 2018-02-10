import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { withRouter } from 'found';

class AppErrorBoundary extends React.Component {
  componentDidCatch() {
    this.props.router.push('/error/500');
  }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

AppErrorBoundary.propTypes = {
  router: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default compose(
  withRouter,
)(AppErrorBoundary);
