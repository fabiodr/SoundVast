import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Profile from './profile';
import UserUploads from './uploads/uploads';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Profile {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Profile', () => {
  let wrapper;

  it('should render user uploads', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(UserUploads).length).toBe(1);
  });

  it('should render username in header', () => {
    const userName = 'Yoshimiii';
    ({ wrapper } = setup({ userName }));

    expect(wrapper.find('h3').text()).toContain(userName);
  });
});
