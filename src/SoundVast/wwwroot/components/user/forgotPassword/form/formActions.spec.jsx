import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('forgotPasswordFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.postOnce('/account/sendResetPasswordEmail', 200);
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('submit should post form', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', {});

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/generatePasswordResetLink')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      email: 'Required',
    };

    fetchMock.postOnce('/account/generatePasswordResetLink', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('submit should do nothing on failure', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
