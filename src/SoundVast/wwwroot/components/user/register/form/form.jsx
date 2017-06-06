import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './form.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../shared/form/elements/input';

const Form = ({ error, handleSubmit }) => (
  <form onSubmit={handleSubmit} action="">
    <AntiForgeryToken form="register" />

    {error}

    <div className={styles.formGroup}>
      <Field className={styles.input} name="username" component={FormInput} placeholder="Username" />
      <Field className={styles.input} name="email" component={FormInput} type="email" placeholder="Email" />
      <Field className={styles.input} name="password" component={FormInput} type="password" placeholder="Password" />
      <Field className={styles.input} name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" />
    </div>
    <div>
      Or <Link to="account/login">login</Link> if you already have an account.
    </div>
    <div className={styles.tos}>
        By registering you are agreeing to our <a href="content/termsOfUse">terms of use.</a>
    </div>
    <br />

    <button className={classNames(genericStyles.button, styles.register)} type="submit">Register</button>
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
