import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, browserHistory, Link, withRouter } from "react-router";

import Audio from "./pages/Audio";
import Upload from "./pages/Upload";
import Layout from "./pages/Layout";
import Auth from "./modules/Auth";
import { Login, Logout, Dashboard } from "./components/account/Auth"
import Footer from "./components/layout/Footer";

render(
<Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Audio}> </IndexRoute>  
      <Route path="login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="dashboard" component={Dashboard} onEnter={Auth.requireAuth} />
    </Route>
</Router>, document.getElementById("app")
);