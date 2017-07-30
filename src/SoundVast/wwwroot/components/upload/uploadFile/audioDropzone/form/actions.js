import notOkError from '../../../../shared/fetch/errorHandling/notOkError/component';
import notOkErrorPopup from '../../../../shared/fetch/errorHandling/notOkError/popup/component';
import validationError from '../../../../shared/fetch/errorHandling/validationError/component';

export const uploadCoverImage = index => (dispatch, getState) => {
  const coverImageFile = getState().upload.audioFiles[index].coverImageFile;

  if (coverImageFile === undefined) {
    return Promise.resolve();
  }
  const formData = new FormData();

  formData.set('file', coverImageFile);

  return fetch('/upload/uploadCoverImage', {
    method: 'post',
    body: formData,
  }).then(validationError)
    .then(notOkError)
    .then(response => response.json())
    .then(json => json.imagePath)
    .catch(notOkErrorPopup(dispatch));
};

export const submit = ({ __RequestVerificationToken, ...values }, index) => (dispatch) => {
  dispatch({
    type: 'SUBMIT_PENDING',
    index,
    isSubmitting: true,
  });

  dispatch(uploadCoverImage(index)).then(coverImageUrl =>
    fetch('/upload/save', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        RequestVerificationToken: __RequestVerificationToken,
      },
      body: JSON.stringify({
        ...values,
        coverImageUrl,
      }),
      credentials: 'same-origin',
    }).then(validationError)
      .then(notOkError)
      .catch(notOkErrorPopup(dispatch)));
};

export const submitPending = (index, isSubmitting) => ({
  type: 'SUBMIT_PENDING',
  index,
  isSubmitting,
});
