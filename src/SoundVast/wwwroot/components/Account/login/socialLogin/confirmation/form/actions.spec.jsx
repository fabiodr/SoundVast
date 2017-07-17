import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('socialLoginConfirmationFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/account/externalLoginConfirmation', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      email: 'Required',
    };

    fetchMock.postOnce('/account/externalLoginConfirmation', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('should do nothing on failure', () => {
    fetchMock.postOnce('/account/externalLoginConfirmation', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
