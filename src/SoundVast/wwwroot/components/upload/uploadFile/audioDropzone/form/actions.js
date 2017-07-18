import { SubmissionError } from 'redux-form';

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
  }).then((response) => {
    if (response.status === 400) {
      return response.json().then((modelErrors) => {
        throw new SubmissionError(modelErrors);
      });
    } else if (response.ok) {
      return response.json().then(json => json.imagePath);
    }
    return null;
  });
};

export const submit = ({ __RequestVerificationToken, ...values }, index) => dispatch =>
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
    }).then((response) => {
      if (response.status === 400) {
        return response.json().then((modelErrors) => {
          throw new SubmissionError(modelErrors);
        });
      }
      return null;
    }),
  );
