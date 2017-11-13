import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Logout from './logout';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Logout {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Logout', () => {
  it('should render an anti-forgery token', () => {
    const { wrapper } = setup();

    expect(wrapper.find(AntiForgeryToken).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });
});
