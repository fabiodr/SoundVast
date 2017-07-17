import expect from 'expect';

import accountValidation from './validation';

describe('accountValidation', () => {
  it('should return no errors if every field is valid', () => {
    const errors = accountValidation({
      username: 'Yoshimiii',
      email: '123test@gmail.com',
      password: 'passwordtest',
      confirmPassword: 'passwordtest',
    });

    expect(errors).toEqual({});
  });

  it('should have an error if username is blank', () => {
    const errors = accountValidation({});

    expect(errors.username).toExist();
  });

  it('should have an error if email is blank', () => {
    const errors = accountValidation({});

    expect(errors.email).toExist();
  });

  it('should have an error if password is blank', () => {
    const errors = accountValidation({});

    expect(errors.password).toExist();
  });

  it('should have an error if username length is more than 15', () => {
    const errors = accountValidation({
      username: '1234567890123456',
    });

    expect(errors.username).toExist();
  });

  it('should have an error if email is invalid', () => {
    const errors = accountValidation({
      email: 'testsdsgd@',
    });

    expect(errors.email).toExist();
  });

  it('should have an error if password length is more than 300', () => {
    let password = '';

    for (let index = 0; index < 301; index += 1) {
      password += '1';
    }

    const errors = accountValidation({
      password,
    });

    expect(errors.password).toExist();
  });

  it('should have an error if passwords don\'t match', () => {
    const errors = accountValidation({
      confirmPassword: 'passwordtest',
    });

    expect(errors.confirmPassword).toExist();
  });
});
