import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { graphql } from 'react-relay';

import Upload from './upload';
import withAuthorization from '../shared/authorization/withAuthorization';
import { addLiveStream } from './actions';

const query = graphql`
  query uploadContainerQuery {
    genres {
      ...genresFieldContainer_genres
    }
    user {
      ...withAuthorization_user
    }
  }
`;

const mapStateToProps = ({ upload }) => ({
  liveStreams: upload.liveStreams,
});

const enhance = compose(
  withAuthorization,
  connect(mapStateToProps, {
    addLiveStream,
  }),
  lifecycle({
    componentDidMount() {
      if (!this.props.liveStreams.length) {
        this.props.addLiveStream();
      }
    },
  }),
);

const UploadContainer = enhance(Upload);

export const routeConfig = {
  Component: UploadContainer,
  query,
};

export default UploadContainer;
