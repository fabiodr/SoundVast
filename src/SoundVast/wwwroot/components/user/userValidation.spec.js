import expect from 'expect';

import validate from './userValidation';

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

  it('should have an error if username is blank', () => {
    const errors = validate({});

    expect(errors.username).toExist();
  });

  it('should have an error if email is blank', () => {
    const errors = validate({});

    expect(errors.email).toExist();
  });

  it('should have an error if password is blank', () => {
    const errors = validate({});

    expect(errors.password).toExist();
  });

  it('should have an error if username contains only spaces', () => {
    const errors = validate({
      username: ' ',
    });

    expect(errors.username).toExist();
  });

  it('should have an error if username length is more than 15', () => {
    const errors = validate({
      username: '1234567890123456',
    });

    expect(errors.username).toExist();
  });

  it('should have an error if email is invalid', () => {
    const errors = validate({
      email: 'testsdsgd@',
    });

    expect(errors.email).toExist();
  });

  it('should have an error if password length is more than 300', () => {
    let password = '';

    for (let index = 0; index < 301; index += 1) {
      password += '1';
    }

    const errors = validate({
      password,
    });

    expect(errors.password).toExist();
  });

  it('should have an error if passwords don\'t match', () => {
    const errors = validate({
      confirmPassword: 'passwordtest',
    });

    expect(errors.confirmPassword).toExist();
  });
});
