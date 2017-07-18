import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserUploads from './uploads';
import UserAudio from './userAudio/userAudio';

const setup = (newProps) => {
  const props = {
    userAudios: [
      { name: 'bubble', coverImageUrl: 'blob:test.jpg' },
      { name: 'kalimba', coverImageUrl: 'blob:test.jpg' },
    ],
    ...newProps,
  };

  const wrapper = shallow(<UserUploads {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UserUploads', () => {
  let wrapper;
  let props;

  it('should map userAudio for each userAudio', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(UserAudio).length).toBe(props.userAudios.length);
  });
});
