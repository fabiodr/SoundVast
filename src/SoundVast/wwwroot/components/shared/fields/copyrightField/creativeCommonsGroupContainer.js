import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, setPropTypes, branch, renderNothing } from 'recompose';

import CreativeCommonsGroup from './creativeCommonsGroup';

const propTypes = {
  formName: PropTypes.string.isRequired,
  creativeCommonsValue: PropTypes.string.isRequired,
};

const mapStateToProps = ({ form }, { formName, creativeCommonsValue }) => ({
  creativeCommonsChecked: form[formName].values.copyright === creativeCommonsValue,
});

export default compose(
  setPropTypes(propTypes),
  connect(mapStateToProps),
  branch(
    props => !props.creativeCommonsChecked,
    renderNothing,
  ),
)(CreativeCommonsGroup);
