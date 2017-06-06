import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('registerFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('account/register', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      userName: 'Required',
      password: 'Required',
    };

    fetchMock.postOnce('account/register', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('account/register', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_POPUP',
        id: 'login',
      });
    });
  });

  it('should close modal on success', () => {
    fetchMock.postOnce('account/register', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
    });
  });

  it('should do nothing on failure', () => {
    fetchMock.postOnce('account/register', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
