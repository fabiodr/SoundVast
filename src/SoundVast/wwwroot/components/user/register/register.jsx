import React from 'react';

import Modal from '../../shared/modal/modalContainer';
import SocialLogins from '../login/socialLogins/socialLoginsContainer';
import AntiForgeryToken from '../../shared/form/antiForgeryToken/antiForgeryTokenContainer';
import styles from './register.less';
import formStyles from '../../shared/form/form.less';
import genericStyles from '../../shared/generic.less';

const Register = () => (
  <Modal title="Register." id="register">
    <SocialLogins />

    <form action="account/register" method="post" className="form-horizontal">
      <AntiForgeryToken />

      <div className="form-group">
        <div className="col-md-12">
          <input className={formStyles.input} placeholder="Username" />
        </div>

        <div className="col-md-12">
          <input type="email" className={formStyles.input} placeholder="Email" />
        </div>

        <div className="col-md-12">
          <input type="password" className={formStyles.input} placeholder="Password" />
        </div>

        <div className="col-md-12">
          <input type="password" className={formStyles.input} placeholder="Confirm Password" />
        </div>
      </div>
      <div>
        <a href="account/login">Login</a> if you already have an account.
      </div>

      <br />
      <div className={styles.tos}>
          By registering you are agreeing to our <a href="content/termsOfUse">terms of use.</a>
      </div>

      <input type="submit" className={genericStyles.button} value="Register" />
    </form>
  </Modal>
);

export default Register;
