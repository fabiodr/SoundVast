import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ModalLink from '../../../shared/modal/link/linkContainer';

import styles from './form.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../shared/form/elements/input';

const Form = ({ error, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="login" />

    {error}

    <div className={styles.formGroup}>
      <Field className={styles.input} name="username" component={FormInput} placeholder="Username" />
      <Field className={styles.input} name="password" component={FormInput} type="password" placeholder="Password" />
    </div>

    <Field name="rememberMe" component="checkbox" checked />
    <div>
      Or <ModalLink modalId="register">register</ModalLink> if you don&apos;t have an account.
    </div>
    <div>
      <Link to="account/forgotPassword">Forgotten your password?</Link>
    </div>
    <br />

    <button className={genericStyles.button}>
      Login
    </button>
  </form>
);

Form.defaultProps = {
  error: null,
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Form;