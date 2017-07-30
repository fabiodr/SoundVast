import React from 'react';
import configureMockStore from 'redux-mock-store';
import expect from 'expect';
import { shallow } from 'enzyme';

import FooterPlayerContainer from './container';

const songs = [
  { id: 0, name: 'bubble.mp3', artist: 'bubbleArtist', coverImageUrl: 'bubble.jpg' },
  { id: 1, name: 'kalimba.mp3', artist: 'kalimbaArtist', coverImageUrl: 'kalimba.jpg' },
];
const store = configureMockStore()({
  music: {
    songs,
  },
});

const setup = (newProps) => {
  const props = {
    ...newProps,
  };

  const wrapper = shallow(
    <FooterPlayerContainer {...props} />,
    { context: { store } },
  );

  return {
    wrapper,
    props,
  };
};

describe('FooterPlayerContainer', () => {
  let wrapper;

  it('should map state', () => {
    ({ wrapper } = setup());

    expect(wrapper.prop('songs')).toBe(songs);
  });
});
