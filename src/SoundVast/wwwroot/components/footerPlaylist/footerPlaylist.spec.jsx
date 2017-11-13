import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import JPlayer, {
  Gui, Audio, Play,
} from 'react-jplayer';
import JPlaylist, {
  Next, Previous,
} from 'react-jplaylist';
import { classes } from 'react-jplayer-utils';

import FooterPlaylist from './footerPlaylist';

const setup = (newProps) => {
  const props = {
    isPlaylistEmpty: false,
    ...newProps,
  };

  const wrapper = shallow(<FooterPlaylist {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FooterPlaylist', () => {
  describe('JPlayer', () => {
    it('has sleek class', () => {
      const { wrapper } = setup();

      expect(wrapper.find(JPlayer).hasClass('jp-sleek')).toBe(true);
    });

    it('has hidden class when isPlaylistEmpty is true', () => {
      const { wrapper } = setup({ isPlaylistEmpty: true });

      expect(wrapper.find(JPlayer).hasClass(classes.HIDDEN)).toBe(true);
    });
  });

  it('passes id to JPlaylist', () => {
    const { wrapper } = setup();

    expect(wrapper.find(JPlaylist).prop('id')).toBe('FooterPlaylist');
  });

  it('renders Audio', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Audio).exists()).toBe(true);
  });

  it('renders Gui', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Gui).exists()).toBe(true);
  });

  it('renders Previous', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Previous).exists()).toBe(true);
  });

  it('renders Play', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Play).exists()).toBe(true);
  });

  it('renders Next', () => {
    const { wrapper } = setup();

    expect(wrapper.find(Next).exists()).toBe(true);
  });
});
