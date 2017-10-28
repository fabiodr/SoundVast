import Relay from 'react-relay';
import { toClass } from 'recompose';

const createPaginationContainer = (fragments, connectionConfig) => BaseComponent =>
  Relay.createPaginationContainer(toClass(BaseComponent), fragments, connectionConfig);

export default createPaginationContainer;
