import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Dislike from './component';
import DislikeIcon from '../../../../../images/ratingControls/dislike.svg';

const setup = (newProps) => {
  const props = {
    dislike: expect.createSpy(),
    ...newProps,
  };

  const wrapper = shallow(<Dislike {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Dislike', () => {
  it('should render dislike icon', () => {
    const { wrapper } = setup();

    expect((wrapper).type()).toBe(DislikeIcon);
  });

  it('should call dislike when dislike icon clicked', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('click');

    expect(props.dislike).toHaveBeenCalled();
  });
});
