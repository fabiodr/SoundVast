import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('registerFormActions', () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('account/register', {});

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
});
