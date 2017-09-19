import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Like from './component';
import LikeIcon from '../../../../../images/ratingControls/like.svg';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Like {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Like', () => {
  it('should render like icon', () => {
    const { wrapper } = setup();

    expect((wrapper).type()).toBe(LikeIcon);
  });
});
