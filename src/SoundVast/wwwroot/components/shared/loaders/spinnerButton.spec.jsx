import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import SpinnerButton from './spinnerButton';
import Spinner from '../../../images/spinners/ellipsis.svg';

const setup = (newProps) => {
  const props = {
    children: 'Save',
    ...newProps,
  };

  const wrapper = shallow(<SpinnerButton {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('SpinnerButton', () => {
  let wrapper;
  let props;

  it('should render Spinner when loading', () => {
    ({ wrapper, props } = setup({ isLoading: true }));

    expect(wrapper.find(Spinner)).toExist();
  });

  it('should render custom text when not loading', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.text()).toBe(props.children);
  });
});
