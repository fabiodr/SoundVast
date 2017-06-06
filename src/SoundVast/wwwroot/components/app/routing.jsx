import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FrontPage from '../frontPage/frontPage';
import Header from '../header/header';
import User from '../user/userContainer';

const T = (props) =>{
  debugger;
  return null;
}

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={User} />
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route exact path="/Account/t" component={T} />
      </Switch>
    </div>
  </BrowserRouter>
);
