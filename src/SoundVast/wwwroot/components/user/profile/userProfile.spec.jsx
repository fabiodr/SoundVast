import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Profile from './userProfile';
import UserUploads from './uploads/uploadsContainer';

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
  it('should render user uploads', () => {
    const { wrapper } = setup();

    expect(wrapper.find(UserUploads).length).toBe(1);
  });

  it('should render username in header', () => {
    const userName = 'Yoshimiii';
    const { wrapper } = setup({ userName });

    expect(wrapper.find('h3').text()).toContain(userName);
  });
});
