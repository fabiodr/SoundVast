import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('resetPasswordFormActions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('submit should post form', (done) => {
    fetchMock.postOnce('/account/resetPassword', {});

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/resetPassword')).toBe(true);
      done();
    });
  });
});
