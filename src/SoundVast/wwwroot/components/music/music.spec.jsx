import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Music from './music';
import Audios from './audios/container';
import InfiniteScrollGrid from '../content/infiniteScrollGrid/infiniteScrollGrid';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<Music {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Music', () => {
  let wrapper;

  it('should change document title to music', () => {
    ({ wrapper } = setup());

    expect((wrapper).prop('title')).toBe('Music');
  });

  it('should render Audios', () => {
    ({ wrapper } = setup());

    expect((wrapper).find(InfiniteScrollGrid).find(Audios).length).toBe(1);
  });
});
