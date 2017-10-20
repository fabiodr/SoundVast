import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Like from './like';
import LikeIcon from '../../../images/ratingControls/like.svg';

const setup = (newProps) => {
  const props = {
    like: expect.createSpy(),
    likes: 22,
    ...newProps,
  };

  const wrapper = shallow(<Like {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Like', () => {
  describe('LikeIcon', () => {
    it('should render', () => {
      const { wrapper } = setup();

      expect(wrapper.find(LikeIcon).type()).toBe(LikeIcon);
    });

    it('should call like when clicked', () => {
      const { wrapper, props } = setup();

      wrapper.find(LikeIcon).simulate('click');

      expect(props.like).toHaveBeenCalled();
    });
  });

  it('should render likes', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.likes').text()).toBe(props.likes.toString());
  });
});
