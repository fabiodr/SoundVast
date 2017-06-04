import React from 'react';
import { Field } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './form.less';
import formStyles from '../../../shared/form/form.less';
import genericStyles from '../../../shared/generic.less';
import AntiForgeryToken from '../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import FormInput from '../../../shared/form/elements/input';

const Form = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} action="" className="form-horizontal">
    <AntiForgeryToken form="register" />

    <div className="form-group">
      <div className="col-md-12">
        <Field className={formStyles.input} name="username" component={FormInput} placeholder="Username" />
      </div>

      <div className="col-md-12">
        <Field className={formStyles.input} name="email" component={FormInput} type="email" placeholder="Email" />
      </div>

      <div className="col-md-12">
        <Field className={formStyles.input} name="password" component={FormInput} type="password" placeholder="Password" />
      </div>

      <div className="col-md-12">
        <Field className={formStyles.input} name="confirmPassword" component={FormInput} type="password" placeholder="Confirm password" />
      </div>
    </div>
    <div>
      <Link to="account/login">Login</Link> if you already have an account.
    </div>

    <br />
    <div className={styles.tos}>
        By registering you are agreeing to our <a href="content/termsOfUse">terms of use.</a>
    </div>

    <button className={genericStyles.button} type="submit">Register</button>
  </form>
);

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
