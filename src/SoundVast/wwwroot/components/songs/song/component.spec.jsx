import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Song from './component';
import Like from './ratingControl/like/container';
import Dislike from './ratingControl/dislike/container';

const setup = (newProps) => {
  const props = {
    id: 0,
    index: 0,
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

  it('renders Like', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Like).exists()).toBe(true);
  });

  it('renders Dislike', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Dislike).exists()).toBe(true);
  });
});
