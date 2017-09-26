import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Song from './component';

const setup = (newProps) => {
  const props = {
    name: 'bubble',
    artist: 'artist',
    ...newProps,
  };

  const wrapper = shallow(<Song {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Song', () => {
  it('renders name', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.name').text()).toContain(props.name);
  });

  it('renders artist', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('.artist').text()).toContain(props.artist);
  });
});
