import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import BasicInfo from './component';

const setup = (newProps) => {
  const props = {
    genres: [
      { id: 0, name: 'metal' },
      { id: 1, name: 'rock' },
    ],
    index: 0,
    ...newProps,
  };

  const wrapper = shallow(<BasicInfo {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('BasicInfo', () => {
  let wrapper;

  it('should map no selectable genres when no genres', () => {
    ({ wrapper } = setup({ genres: [] }));
    const genreSelect = wrapper.find(Field).filter('[name="genreId"]');

    expect(genreSelect.find('option').length).toBe(1);
  });

  it('should map selectable genres when genres', () => {
    ({ wrapper } = setup());
    const genreSelect = wrapper.find(Field).filter('[name="genreId"]');

    expect(genreSelect.find('option').length).toBe(3);
  });
});
