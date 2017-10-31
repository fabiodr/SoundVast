import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { TabPanel } from 'react-tabs';

import BasicInfo from '../common/basicInfo/basicInfo';
import NameField from '../../shared/fields/nameField/nameField';
import GenreField from '../../shared/fields/genreField/genreField';
import ValidationErrors from '../../shared/validation/validationErrors';
import UploadFileForm from './uploadFileForm';
import SpinnerSubmit from '../../shared/form/spinnerSubmit/spinnerSubmitContainer';
import CancelButton from '../common/cancelButton/cancelButton';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    remove: expect.createSpy(),
    form: 'upload_0',
    id: 'test',
    ...newProps,
  };

  const wrapper = shallow(<UploadFileForm {...props} />);
  const basicInfo = wrapper.find(BasicInfo);

  return {
    wrapper,
    props,
    basicInfo,
  };
};

describe('UploadFileForm', () => {
  describe('Basic Info', () => {
    it('should render Name field', () => {
      const { basicInfo } = setup();

      expect(basicInfo.find(NameField).length).toBe(1);
    });

    it('should render Genre field', () => {
      const { basicInfo } = setup();

      expect(basicInfo.find(GenreField).length).toBe(1);
    });
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
