import expect from 'expect';

import validate from './userValidation';
import ERROR_MESSAGES from '../shared/form/validation/errorMessages';

describe('userValidation', () => {
  it('should return no errors if every field is valid', () => {
    const errors = validate({
      username: 'Yoshimiii',
      email: '123test@gmail.com',
      password: 'passwordtest',
      confirmPassword: 'passwordtest',
    });

    expect(errors).toEqual({});
  });

  it('should have Required error if username is blank', () => {
    const errors = validate({});

    expect(errors.username).toBe(ERROR_MESSAGES.required);
  });

  it('should have Required error if email is blank', () => {
    const errors = validate({});

    expect(errors.email).toBe(ERROR_MESSAGES.required);
  });

  it('should have Required error if password is blank', () => {
    const errors = validate({});

    expect(errors.password).toBe(ERROR_MESSAGES.required);
  });

  it('should have non space error if username contains only spaces', () => {
    const errors = validate({
      username: ' ',
    });

    expect(errors.username).toBe(ERROR_MESSAGES.nonSpace);
  });

  it('should have length15 error if username length is more than 15', () => {
    const errors = validate({
      username: '1234567890123456',
    });

    expect(errors.username).toBe(ERROR_MESSAGES.length15);
  });

  it('should have invalid email error if email is invalid', () => {
    const errors = validate({
      email: 'testsdsgd@',
    });

    expect(errors.email).toBe(ERROR_MESSAGES.invalidEmail);
  });

  it('should have length300 error if password length is more than 300', () => {
    let password = '';

    for (let index = 0; index < 301; index += 1) {
      password += '1';
    }

    const errors = validate({
      password,
    });

    expect(errors.password).toBe(ERROR_MESSAGES.length300);
  });

  it('should have invalidConfirmPassword error if passwords don\'t match', () => {
    const errors = validate({
      confirmPassword: 'passwordtest',
    });

    expect(errors.confirmPassword).toBe(ERROR_MESSAGES.invalidConfirmPassword);
  });
});
