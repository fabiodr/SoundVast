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
  resetPasswordLink: '/account/resetPassword',
};

describe('forgotPasswordFormActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.postOnce('/email/sendEmail', 200);
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('submit should post form', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', body);

    store.dispatch(actions.submit()).then(() => {
      expect(fetchMock.called('/account/generatePasswordResetLink')).toBe(true);
    });
  });

  it('should handle validation errors', () => {
    const modelErrors = {
      email: 'Required',
    };

    fetchMock.postOnce('/account/generatePasswordResetLink', {
      status: 400,
      body: modelErrors,
    });

    store.dispatch(actions.submit()).catch((error) => {
      expect(error.errors).toEqual(modelErrors);
      expect(error instanceof SubmissionError).toBe(true);
    });
  });

  it('should send forgot password email on success', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', body);

    store.dispatch(actions.submit()).then(() => {
      const sentEmailBody = JSON.parse(fetchMock.lastOptions('/email/sendEmail').body);

      expect(fetchMock.called('/email/sendEmail')).toBe(true);
      expect(sentEmailBody).toContain({
        email: body.email,
        subject: 'Reset Password',
      });
      expect(sentEmailBody.message).toBeTruthy();
    });
  });

  it('should show popup message on success', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', body);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text: 'A password reset link has been sent to your email.',
      });
    });
  });

  it('should close modal on success', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', body);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
    });
  });

  it('submit should do nothing on failure', () => {
    fetchMock.postOnce('/account/generatePasswordResetLink', 500);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toEqual([]);
    });
  });
});
