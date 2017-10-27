import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp, withProps } from 'recompose';
import { connect } from 'react-redux';

import LiveStreamForm from './liveStreamForm';
import uploadValidation from '../validation';
import saveLiveStreamMutation from './saveLiveStreamMutation';
import { removeLiveStreamForm } from '../actions';

const mapStateToProps = ({ upload }, { id }) => ({
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { index }) => ({
  removeLiveStreamForm: () => dispatch(removeLiveStreamForm(index)),
});

const handlers = {
  onSubmit: () => saveLiveStreamMutation,
};

const createProps = ({ imagePath }) => ({
  initialValues: {
    imagePath,
  },
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  flattenProp('coverImage'),
  withProps(createProps),
  reduxForm({
    validate: uploadValidation,
    enableReinitialize: true,
  }),
)(LiveStreamForm);
