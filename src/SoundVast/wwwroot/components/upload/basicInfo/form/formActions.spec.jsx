import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('uploadFormActions', () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/upload', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/upload')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      title: 'Required',
    };

    fetchMock.postOnce('/upload', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });
});
