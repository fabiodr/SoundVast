import { SubmissionError } from 'redux-form';

export default (...args) => (
  func,
  success = Function.prototype,
  error = Function.prototype,
) => new Promise((resolve, reject) => {
  func(...args, () => {
    success();
    resolve();
  }, (errors) => {
    error(errors);
    reject(new SubmissionError(errors));
  });
});
