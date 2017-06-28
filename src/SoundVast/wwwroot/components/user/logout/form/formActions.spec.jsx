import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('logoutFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.getOnce('/account/getUserDetails', {});
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/account/logout', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/logout')).toBe(true);
    });
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('/account/logout', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        text: 'You have successfully logged out.',
        id: 'textPopup',
      });
    });
  });

  it('should fetch user details on success', () => {
    fetchMock.postOnce('/account/logout', 200);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/getUserDetails')).toBe(true);
    });
  });

  it('should do nothing on failure', () => {
    fetchMock.postOnce('/account/logout', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
