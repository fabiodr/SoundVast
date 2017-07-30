import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import FormSelect from './component';
import EditableField from '../component';

const setup = (newProps) => {
  const props = {
    input: {},
    meta: {
      touched: false,
      error: 'error',
    },
    ...newProps,
  };

  const wrapper = shallow(<FormSelect {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('FormSelect', () => {
  let wrapper;
  let props;

  it('should render select', () => {
    ({ wrapper } = setup());

    expect(wrapper.find('select').length).toBe(1);
  });

  it('should wrap select in EditableField', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find(EditableField).children('select').length).toBe(1);
    expect(wrapper.find(EditableField).prop('error')).toBe(props.meta.error);
    expect(wrapper.find(EditableField).prop('touched')).toBe(props.meta.touched);
  });
});
