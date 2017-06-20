import expect from 'expect';

import { mapDispatchToProps } from './formContainer';
import { submit } from '../form/formActions';

describe('RegisterFormContainer', () => {
  let dispatchSpy;
  let dispatchProps;

  beforeEach(() => {
    dispatchSpy = expect.createSpy();
    dispatchProps = mapDispatchToProps(dispatchSpy);
  });

  afterEach(() => {
    expect.restoreSpies();
  });

  it('should submit formData in onSubmit handler', () => {
    const values = {
      userName: 'Yoshiii',
      password: 'test',
    };

    expect.spyOn(FormData.prototype, 'append');

    dispatchProps.onSubmit(values);

    expect(dispatchSpy).toHaveBeenCalledWith(submit());
    Object.keys(values).forEach((key) => {
      expect(FormData.prototype.append).toHaveBeenCalledWith(key, values[key]);
    });
  });
});
