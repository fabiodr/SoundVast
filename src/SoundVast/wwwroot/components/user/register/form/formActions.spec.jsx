import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('registerFormActions', () => {
  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should submit form', () => {
    const formData = {
      username: 'yoshimiii',
      password: 'passwordtest',
    };

    fetchMock.postOnce('account/register', formData);

    store.dispatch(actions.submit(formData)).then(() => {
      expect(fetchMock.called()).toBe(true);
    });
  });
});
