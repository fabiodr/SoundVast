import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { SubmissionError } from 'redux-form';

import * as actions from './formActions';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const body = {
  email: 'test@gmail.com',
  confirmEmailLink: '/account/confirm',
};

describe('registerFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.getOnce('/account/getUserDetails', body);
    fetchMock.postOnce('/email/sendEmail', 200);
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should post form', () => {
    fetchMock.postOnce('/account/register', body);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/register')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      userName: 'Required',
      password: 'Required',
    };

    fetchMock.postOnce('/account/register', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('/account/register', body);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_POPUP',
        id: 'loginSuccess',
      });
    });
  });

  it('should close modal on success', () => {
    fetchMock.postOnce('/account/register', body);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
    });
  });

  it('should fetch user details on success', () => {
    fetchMock.postOnce('/account/register', body);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/getUserDetails')).toBe(true);
    });
  });

  it('should send confirmation email on success', () => {
    fetchMock.postOnce('/account/register', body);

    store.dispatch(actions.submit()).then(() => {
      const sentEmailBody = JSON.parse(fetchMock.lastOptions('/email/sendEmail').body);

      expect(fetchMock.called('/email/sendEmail')).toBe(true);
      expect(sentEmailBody).toContain({
        email: body.email,
        subject: 'Confirm Email',
      });
      expect(sentEmailBody.message).toBeTruthy();
    });
  });

  it('should do nothing on failure', () => {
    fetchMock.postOnce('/account/register', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
