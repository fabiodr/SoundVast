import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('loginFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.getOnce('/account/getAccountDetails', {});
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/login')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      userName: 'Required',
      password: 'Required',
    };

    fetchMock.postOnce('/account/login', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text: 'You have successfully logged in.',
      });
    });
  });

  it('should close modal on success', () => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
    });
  });

  it('should fetch user details on success', () => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/getAccountDetails')).toBe(true);
    });
  });

  it('should do nothing on failure', () => {
    fetchMock.postOnce('/account/login', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
