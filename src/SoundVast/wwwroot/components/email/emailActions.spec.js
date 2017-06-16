import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './emailActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('emailActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('sendEmail should send an email', () => {
    fetchMock.postOnce('/email/sendEmail', {});

    store.dispatch(actions.sendEmail()).then(() => {
      expect(fetchMock.called('/email/sendEmail')).toBe(true);
    });
  });
});
