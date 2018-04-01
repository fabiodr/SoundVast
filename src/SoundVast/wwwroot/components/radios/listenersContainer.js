import { compose, lifecycle, setPropTypes, withStateHandlers } from 'recompose';
import PropTypes from 'prop-types';

import Listeners from './listeners';
import { getListenersForStation } from './actions';

const propTypes = {
  id: PropTypes.number.isRequired,
};

const stateHandlers = {
  updateListeners: () => listeners => ({
    listeners,
  }),
};

export default compose(
  setPropTypes(propTypes),
  withStateHandlers({
    listeners: 0,
  }, stateHandlers),
  lifecycle({
    componentDidMount() {
      getListenersForStation(this.props.id)
        .then(({ listeners }) => this.props.updateListeners(listeners));
    },
  }),
)(Listeners);
