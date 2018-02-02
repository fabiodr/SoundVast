import { reduxForm } from 'redux-form';
import { compose, withHandlers, withProps } from 'recompose';
import { connect } from 'react-redux';

import LiveStreamForm from './liveStreamForm';
import audioValidation from '../../shared/validation/audioValidation';
import saveLiveStreamMutation from './saveLiveStreamMutation';
import { removeLiveStreamForm } from '../actions';

const mapDispatchToProps = (dispatch, { index }) => ({
  removeLiveStreamForm: () => dispatch(removeLiveStreamForm(index)),
});

const handlers = {
  onSubmit: () => input => saveLiveStreamMutation(input),
};

const createProps = ({ imagePath }) => ({
  initialValues: {
    imagePath,
    copyright: 'AllRightsReserved',
    creativeCommonsNoncommercial: true,
    creativeCommonsRadioButtonGroup: 'Share',
  },
});

export default compose(
  connect(null, mapDispatchToProps),
  withHandlers(handlers),
  withProps(createProps),
  reduxForm({
    validate: audioValidation,
  }),
)(LiveStreamForm);
