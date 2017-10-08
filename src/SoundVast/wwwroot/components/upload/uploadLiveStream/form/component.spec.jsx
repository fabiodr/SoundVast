import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import LiveStreamInformation from './liveStreamInformation/component';
import UploadLiveStreamForm from './component';
import ValidationErrors from '../../../shared/form/validation/errors/component';
import CancelButton from '../../common/cancelButton/component';

const setup = (newProps) => {
  const props = {
    handleSubmit: expect.createSpy(),
    remove: expect.createSpy(),
    form: 'upload_0',
    ...newProps,
  };

  const wrapper = shallow(<UploadLiveStreamForm {...props} />);

  return {
    wrapper,
    props,
  };
};

describe('UploadLiveStreamForm', () => {
  it('should render LiveStreamInformation', () => {
    const { wrapper } = setup();

    expect(wrapper.find(LiveStreamInformation).length).toBe(1);
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

  it('should render CancelButton', () => {
    const { wrapper } = setup();

    expect(wrapper.find(CancelButton).length).toBe(1);
  });
});
