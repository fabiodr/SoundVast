import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

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

  it('should show popup message on success', (done) => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text: 'You have successfully logged in.',
      });
      done();
    });
  });

  it('should close modal on success', (done) => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
      done();
    });
  });

  it('should fetch user details on success', (done) => {
    fetchMock.postOnce('/account/login', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/getAccountDetails')).toBe(true);
      done();
    });
  });
});
