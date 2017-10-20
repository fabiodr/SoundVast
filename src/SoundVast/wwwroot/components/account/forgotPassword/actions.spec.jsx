import expect from 'expect';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from './actions';

const mockStore = configureStore([thunk]);
const store = mockStore({});
const response = {
  email: 'test@gmail.com',
  resetPasswordLink: '/account/resetPassword',
};

describe('forgotPasswordActions', () => {
  let calledActions;

  beforeEach(() => {
    store.clearActions();
    calledActions = store.getActions();
    fetchMock.postOnce('/email/sendEmail', 200);
  });

  afterEach(() => {
    fetchMock.reset().restore();
  });

  it('should send forgot password email on success', (done) => {
    fetchMock.postOnce('/account/generatePasswordResetLink', response);

    store.dispatch(actions.submit()).then(() => {
      const sentEmailBody = JSON.parse(fetchMock.lastOptions('/email/sendEmail').body);

      expect(fetchMock.called('/email/sendEmail')).toBe(true);
      expect(sentEmailBody).toContain({
        email: response.email,
        subject: 'Reset Password',
      });
      expect(sentEmailBody.message).toBeTruthy();
      done();
    });
  });

  it('should show popup message on success', (done) => {
    fetchMock.postOnce('/account/generatePasswordResetLink', response);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'SHOW_TEXT_POPUP',
        id: 'textPopup',
        text: 'A password reset link has been sent to your email.',
      });
      done();
    });
  });

  it('should close modal on success', (done) => {
    fetchMock.postOnce('/account/generatePasswordResetLink', response);

    store.dispatch(actions.submit()).then(() => {
      expect(calledActions).toContain({
        type: 'HIDE_MODAL',
      });
      done();
    });
  });
});
