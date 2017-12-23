import { reduxForm } from 'redux-form';
import { compose, withHandlers, flattenProp, withProps } from 'recompose';
import { connect } from 'react-redux';

import LiveStreamForm from './liveStreamForm';
import audioValidation from '../../shared/validation/audioValidation';
import saveLiveStreamMutation from './saveLiveStreamMutation';
import { removeLiveStreamForm } from '../actions';
import { showAddedContributionPoints } from '../../account/actions';

const mapStateToProps = ({ upload }, { id }) => ({
  coverImage: upload.coverImages[id],
});

const mapDispatchToProps = (dispatch, { index }) => ({
  removeLiveStreamForm: () => dispatch(removeLiveStreamForm(index)),
  showAddedContributionPoints: newPoints => dispatch(showAddedContributionPoints(newPoints)),
});

const handlers = {
  onSubmit: props => input => saveLiveStreamMutation(input)
    .then(({ saveLiveStream }) => {
      props.showAddedContributionPoints(saveLiveStream.contributionPoints);
    }),
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
    validate: audioValidation,
    enableReinitialize: true,
  }),
)(LiveStreamForm);
