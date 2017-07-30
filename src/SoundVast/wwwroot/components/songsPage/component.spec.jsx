import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SongsPage from './component';

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(<SongsPage {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SongsPage', () => {
  let wrapper;

  it('should change document title to songs', () => {
    ({ wrapper } = setup());

    expect((wrapper).prop('title')).toBe('Songs');
  });
});
