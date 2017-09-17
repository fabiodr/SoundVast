import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Play from './component';

const setup = (newProps) => {
  const props = {
    isCurrent: false,
    ...newProps,
  };

  const wrapper = shallow(<Play {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('PlayState Play', () => {
  describe('className', () => {
    it('has play class', () => {
      const { wrapper } = setup();

      expect(wrapper.hasClass('play')).toBe(true);
    });

    it('has currentlyPlayed class when isCurrent and hasPlayed', () => {
      const { wrapper } = setup({ isCurrent: true, hasPlayed: true });

      expect(wrapper.hasClass('currentlyPlayed')).toBe(true);
    });
  });
});
