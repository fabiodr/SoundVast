import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FileInformation from './fileInformation';
import ValidationErrors from '../../../shared/form/validation/errors/component';
import UploadFileForm from './uploadFileForm';
import SpinnerSubmit from '../../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import CancelButton from '../../common/cancelButton/cancelButton';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    remove: expect.createSpy(),
    form: 'upload_0',
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

  it('should render SpinnerSubmit', () => {
    const isLoading = true;
    const { wrapper } = setup({ isLoading });

    expect(wrapper.find(SpinnerSubmit).length).toBe(1);
  });

  it('should render CancelButton', () => {
    const { wrapper } = setup();

    expect(wrapper.find(CancelButton).length).toBe(1);
  });
});
