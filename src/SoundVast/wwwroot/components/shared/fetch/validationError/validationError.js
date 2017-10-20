import { SubmissionError } from 'redux-form';

export default (response) => {
  if (response.status === 400) {
    return response.json().then((modelErrors) => {
      throw new SubmissionError(modelErrors);
    });
  }

  return response;
};
