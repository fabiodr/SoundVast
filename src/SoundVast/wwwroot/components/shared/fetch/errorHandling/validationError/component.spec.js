import expect from 'expect';
import { SubmissionError } from 'redux-form';

import validation from './component';

const modelErrors = {
  name: 'Name is required',
};

describe('fetchErrorHandlingValidationError', () => {
  let response;

  it('should throw submission error when status is 400', () => {
    response = {
      status: 400,
      json: () => Promise.resolve(modelErrors),
    };

    return validation(response).catch((e) => {
      expect(e).toBeA(SubmissionError);
      expect(e.errors.name).toBe(modelErrors.name);
    });
  });

  it('should return response when status is not 400', () => {
    response = {
      status: 200,
      json: () => Promise.resolve(modelErrors),
    };

    const result = validation(response);

    expect(result).toBe(response);
  });
});
