import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FileInformation from './fileInformation/component';
import UploadFileForm from './component';
import ValidationErrors from '../../../../shared/form/validation/errors/component';
import SpinnerButton from '../../../../shared/spinners/button/component';
import CancelButton from '../../../common/cancelButton/container';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    remove: expect.createSpy(),
    form: 'upload_0',
    index: 0,
    ...newProps,
  };

  const wrapper = shallow(<UploadFileForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UploadFileForm', () => {
  it('should render FileInformation', () => {
    const { wrapper } = setup();

    expect(wrapper.find(FileInformation).length).toBe(1);
  });

  it('should call submit handler when form is submitted', () => {
    const { wrapper, props } = setup();

    wrapper.simulate('submit');

    expect(props.handleSubmit).toHaveBeenCalled();
  });

  it('should render validation errors', () => {
    const { wrapper } = setup();

    expect(wrapper.find(ValidationErrors).length).toBe(1);
  });

  it('should render SpinnerButton', () => {
    const isLoading = true;
    const { wrapper } = setup({ isLoading });

    expect(wrapper.find(SpinnerButton).length).toBe(1);
  });

  it('should render CancelButton', () => {
    const { wrapper } = setup();

    expect(wrapper.find(CancelButton).length).toBe(1);
  });
});
