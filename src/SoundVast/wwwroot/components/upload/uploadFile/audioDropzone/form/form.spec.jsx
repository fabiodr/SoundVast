import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import UploadFileForm from './form';
import ValidationErrors from '../../../../shared/form/validation/errors/errors';

const setup = (newProps) => {
  const props = {
    children: <div className="@@test" />,
    handleSubmit: expect.createSpy(),
    removeFile: expect.createSpy(),
    form: 'upload_0',
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

  it('should render children', () => {
    ({ wrapper, props } = setup());

    expect(wrapper.find('.@@test').length).toBe(1);
  });

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
