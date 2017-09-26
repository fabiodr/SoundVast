import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Pause from './component';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Pause {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('PlayState Pause', () => {
  describe('className', () => {
    it('has pause class', () => {
      const { wrapper } = setup();

      expect(wrapper.hasClass('pause')).toBe(true);
    });
  });
});
