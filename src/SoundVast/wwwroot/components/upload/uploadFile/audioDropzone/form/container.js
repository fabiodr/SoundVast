import { reduxForm } from 'redux-form';
import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import { graphql, commitMutation } from 'react-relay';

import UploadFileForm from './component';
import { submitFile, removeMusicForm } from '../../../actions';
import { getMusicGenres } from '../../../../genre/actions';
import uploadValidation from '../../../validation';
import validationError from '../../../../shared/fetch/errorHandling/validationError/component';

const mutation = graphql`
  mutation saveSongMutation($values: SongInput!) {
    saveSong(song: $values) {
      id
    }
  }
`;

const mapStateToProps = ({ upload }, { index }) => ({
  initialValues: {
    name: upload.audioFiles[index].title,
    artist: upload.audioFiles[index].artist,
  },
});

const mapDispatchToProps = (dispatch, { id, index }) => ({
  // onSubmit: values => dispatch(submitFile(id, values)),
  getMusicGenres: () => dispatch(getMusicGenres()),
  removeMusicForm: () => dispatch(removeMusicForm(index)),
});

const handlers = {
  onSubmit: (props) => values => {
    debugger; return commitMutation(
      props.relay.environment, {
        mutation,
        variables: {
          values,
          onCompleted: (response, errors) => {
            debugger
            validationError(response);
          },
        },
      },
    )
  },
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle({
    componentDidMount() {
      this.props.getMusicGenres();
    },
  }),
  reduxForm({
    validate: uploadValidation,
  }),
)(UploadFileForm);
