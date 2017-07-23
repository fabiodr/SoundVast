import expect from 'expect';

import notOkError from './notOkError';

describe('fetchErrorHandlingNotOkError', () => {
  let response;

  it('should return rejected promise if not ok', () => {
    response = {
      ok: false,
    };

    return notOkError(response).catch((errorResponse) => {
      expect(errorResponse).toBe(response);
    });
  });

  it('should return response when its ok', () => {
    response = {
      ok: true,
    };

    const result = notOkError(response);

    expect(result).toBe(response);
  });
});
