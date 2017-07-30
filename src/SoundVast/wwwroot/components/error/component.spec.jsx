import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Error from './component';

const errorMessage = 'Test Error Message';
const setup = (newProps) => {
  const props = {
    location: {
      search: `?error=${errorMessage}`,
    },
    ...newProps,
  };

  const wrapper = shallow(
    <Error {...props} />,
  );

  return {
    wrapper,
    props,
  };
};

describe('Error', () => {
  let wrapper;

  it('should render an errorMessage', () => {
    ({ wrapper } = setup());

    const error = wrapper.find('span');

    expect(error.text()).toBe(errorMessage);
  });
});
