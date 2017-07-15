/* eslint-disable no-underscore-dangle */

import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const __RequestVerificationToken = '@fdsewr';

describe('uploadFormActions', () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/upload/save', 200);

    store.dispatch(actions.submit({ __RequestVerificationToken })).then(() => {
      expect(fetchMock.called('/upload/save')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      title: 'Required',
    };

    fetchMock.postOnce('/upload/save', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit({ __RequestVerificationToken })).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });
});
