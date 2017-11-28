import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { graphql } from 'react-relay';

import Upload from './upload';
import withAuthorization from '../shared/authorization/withAuthorization';
import { addLiveStream } from './actions';

const lifecycleFunctions = {
  componentDidMount() {
    this.props.addLiveStream();
  },
};

const query = graphql`
  query uploadContainerQuery {
    genres {
      ...genreFieldContainer_genres
    }
    user {
      ...withAuthorization_user
    }
  }
`;

const enhance = compose(
  withAuthorization,
  connect(null, {
    addLiveStream,
  }),
  lifecycle(lifecycleFunctions),
);

const UploadContainer = enhance(Upload);

export const routeConfig = {
  Component: UploadContainer,
  query,
};

export default UploadContainer;
