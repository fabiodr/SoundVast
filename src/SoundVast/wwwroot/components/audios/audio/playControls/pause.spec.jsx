import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Pause from './pause';

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

describe('PlayControlsPause', () => {
  describe('className', () => {
    it('has pause class', () => {
      const { wrapper } = setup();

      expect(wrapper.hasClass('pause')).toBe(true);
    });
  });
});
