import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UploadFileForm from './form';
import ValidationErrors from '../../../../shared/form/validation/errors/errors';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    removeFile: expect.createSpy(),
    index: 2,
    ...newProps,
  };

  const wrapper = shallow(<UploadFileForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UploadFileForm', () => {
  let wrapper;
  let props;

  it('should call submit handler when form is submitted', () => {
    ({ wrapper, props } = setup());

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should call removeFile on cancel click', () => {
    ({ wrapper, props } = setup());

    wrapper.find('.cancel').simulate('click');

    expect(props.removeFile).toHaveBeenCalledWith(props.index);
  });

  it('should render validation errors', () => {
    ({ wrapper } = setup());

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });
});
