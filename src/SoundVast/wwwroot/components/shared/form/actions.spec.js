import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});

describe('formActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should submit pending', () => {
    const id = 'test';
    const action = actions.submitPending('test');

    expect(action).toEqual({
      type: 'FORM_SUBMIT_PENDING',
      id,
    });
  });

  it('should fetch an anti forgery token', () => {
    const json = {
      antiForgeryToken: '0#DERG£%%FDD£',
    };

    fetchMock.postOnce('/form/generateAntiForgeryToken', json);

    store.dispatch(actions.generateAntiForgeryToken('registerForm')).then(() => {
      expect(calledActions).toEqual([{
        meta: {
          field: '__RequestVerificationToken',
          form: 'registerForm',
          persistentSubmitErrors: undefined,
          touch: undefined,
        },
        payload: '0#DERG£%%FDD£',
        type: '@@redux-form/CHANGE',
      }]);
    });
  });
});
