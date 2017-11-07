import { SubmissionError } from 'redux-form';

export default (...args) => (
  func,
  error = Function.prototype,
  completed = Function.prototype,
) => new Promise((resolve, reject) => {
  func(...args, () => {
    completed();
    resolve();
  }, (errors) => {
    error(errors);
    reject(new SubmissionError(errors));
  });
});
