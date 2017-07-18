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
  let wrapper;
  let props;

  it('should render name', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find('figcaption').text()).toContain(props.name);
  });

  it('should render artist', () => {
    const artist = 'bubbleArtist';

    ({ wrapper } = setup({ artist }));

    expect(wrapper.find('figcaption').text()).toContain(artist);
  });

  it('should render cover image', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find('img').prop('src')).toBe(props.coverImageUrl);
  });
});
