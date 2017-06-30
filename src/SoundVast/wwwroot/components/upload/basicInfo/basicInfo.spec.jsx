import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';

import BasicInfo from './basicInfo';

const setup = (newProps) => {
  const props = {
    genres: [],
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
    ({ wrapper } = setup());
    const genreSelect = wrapper.find(Field).filter('[name="genre"]');

    expect(genreSelect.find('option').length).toBe(1);
  });
});
