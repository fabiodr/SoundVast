import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Dislike from './dislike';
import DislikeIcon from '../../../images/ratingControls/dislike.svg';

const setup = (newProps) => {
  const props = {
    dislike: expect.createSpy(),
    dislikes: 22,
    ...newProps,
  };

  const wrapper = shallow(<Dislike {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Dislike', () => {
  describe('DislikeIcon', () => {
    it('should render', () => {
      const { wrapper } = setup();

      expect(wrapper.find(DislikeIcon).type()).toBe(DislikeIcon);
    });

    it('should call dislike when clicked', () => {
      const { wrapper, props } = setup();

      wrapper.find(DislikeIcon).simulate('click');

      expect(props.dislike).toHaveBeenCalled();
    });
  });

  it('should render dislikes', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.dislikes').text()).toBe(props.dislikes.toString());
  });
});
