import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('resetPasswordFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('submit should post form', () => {
    fetchMock.postOnce('/account/resetPassword', {});

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/resetPassword')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      password: 'Required',
      confirmPassword: 'Required',
    };

    fetchMock.postOnce('/account/resetPassword', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('submit should do nothing on failure', () => {
    fetchMock.postOnce('/account/resetPassword', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
