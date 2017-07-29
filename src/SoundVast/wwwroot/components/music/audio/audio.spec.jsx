import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Audio from './audio';

const setup = (newProps) => {
  const props = {
    name: 'bubble',
    artist: 'artist',
    coverImageUrl: 'bubble.jpg',
    ...newProps,
  };

  const wrapper = shallow(<Audio {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('Audio', () => {
  let wrapper;
  let props;

  it('should render name', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find('.name').text()).toContain(props.name);
  });

  it('should render artist', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find('.artist').text()).toContain(props.artist);
  });

  it('should render coverImageUrl', () => {
    ({ wrapper, props } = setup());

    expect((wrapper).find('img').prop('src')).toBe(props.coverImageUrl);
  });
});
