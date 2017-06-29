import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UploadForm from './form';
import ValidationErrors from '../../../../shared/form/validation/errors/errors';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    cancel: expect.createSpy(),
    index: 2,
    ...newProps,
  };

  const wrapper = shallow(<UploadForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UploadForm', () => {
  let wrapper;
  let props;

  it('should call submit handler when form is submitted', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should call cancel on cancel click', () => {
    ({ wrapper, props } = setup());

    wrapper.find('.cancel').simulate('click');

    expect(props.cancel).toHaveBeenCalledWith(props.index);
  });

  it('should render validation errors', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });
});
