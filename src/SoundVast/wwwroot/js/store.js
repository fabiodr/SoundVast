import React from "react";
import {render} from "react-dom";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import Routing from "./Routing";

const middleWare = applyMiddleware(thunk);
const store = createStore(reducers, middleWare);

render(
<Provider store={store}>
    <Routing />
</Provider>
, document.getElementById("app"));