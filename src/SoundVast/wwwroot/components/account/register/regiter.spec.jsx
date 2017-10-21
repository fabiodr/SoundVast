import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Register from './register';
import Modal from '../../shared/modal/modalContainer';
import SocialLoginsContainer from '../login/socialLogins/socialLoginsContainer';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import ValidationErrors from '../../shared/form/validation/errors/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Register {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Register', () => {
  it('should render social logins in a Modal', () => {
    const { wrapper } = setup();
    const modal = wrapper.find(Modal);

    expect(modal.find(SocialLoginsContainer).length).toBe(1);
  });

  it('should render a form in a Modal', () => {
    const { wrapper } = setup();
    const modal = wrapper.find(Modal);
    const form = modal.find('form');

    expect(modal.find(form).length).toBe(1);
  });

  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should render validation errors', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();
    const form = wrapper.find('form');

    form.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
