import React from 'react';

import AntiForgeryToken from '../../../../../shared/form/antiForgeryToken/antiForgeryTokenContainer';

const Form = () => (
  <form action="account/externalLoginConfirmation" method="post">
    <AntiForgeryToken form="socialLoginConfirmation" />

    <h4>Association Form</h4>

    <hr />
    <p className="text-info">
        You&apos;ve successfully authenticated with .
        Please enter an email address for this site below and click the Register button to finish
        logging in.
    </p>
    <div className="form-group">
      <div className="col-md-10">
        <input asp-for="Email" className="form-control" />
        <span asp-validation-for="Email" className="text-danger" />
      </div>
    </div>
    <div className="form-group">
      <div className="col-md-offset-2 col-md-10">
        <button type="submit" className="btn btn-default">Register</button>
      </div>
    </div>
  </form>
);

export default Form;
