import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UserAudio from './userAudio';

const setup = (newProps) => {
  const props = {
    name: 'bubble',
    coverImageUrl: 'blob:test.jpg',
    ...newProps,
  };

  const wrapper = shallow(<UserAudio {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UserAudio', () => {
  it('should render name', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('figcaption').text()).toContain(props.name);
  });

  it('should render artist', () => {
    const artist = 'bubbleArtist';

    const { wrapper } = setup({ artist });

    expect(wrapper.find('figcaption').text()).toContain(artist);
  });

  it('should render cover image', () => {
    const { wrapper, props } = setup();

    expect(wrapper.find('img').prop('src')).toBe(props.coverImageUrl);
  });
});
