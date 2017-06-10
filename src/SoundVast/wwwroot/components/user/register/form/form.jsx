import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './form.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../shared/form/elements/input';
import ValidationErrors from '../../../shared/form/validation/errors/errors';
import ModalLink from '../../../shared/modal/link/linkContainer';

const Form = ({ error: errors, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="register" />
    <ValidationErrors errors={errors} />

    <div className={styles.formGroup}>
      <Field className={styles.input} name="username" component={FormInput} placeholder="Username" />
      <Field className={styles.input} name="email" component={FormInput} placeholder="Email" />
      <Field className={styles.input} name="password" component={FormInput} type="password" placeholder="Password" />
      <Field className={styles.input} name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" />
    </div>
    <div>
      Or <ModalLink modalId="login">login</ModalLink> if you already have an account.
    </div>
    <div className={styles.tos}>
        By registering you are agreeing to our <a href="content/termsOfUse">terms of use.</a>
    </div>
    <br />

    <button className={genericStyles.button}>
      Register
    </button>
  </form>
);

Form.defaultProps = {
  error: [],
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;
