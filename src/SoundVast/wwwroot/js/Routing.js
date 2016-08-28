import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import DocumentTitle from "react-document-title";

import AppContainer from "./app/AppContainer";
import AudioContainer from "./audio/AudioContainer";

export default () => (
    <DocumentTitle title='SoundVast'>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
            <IndexRoute component={AudioContainer} />
            </Route>
        </Router>
    </DocumentTitle>
);