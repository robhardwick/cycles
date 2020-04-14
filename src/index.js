import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import "./css/styles.css";

import { audioMiddleware } from "./js/audio";
import { rootReducer } from './js/reducers';
import { App } from "./js/containers/App";
import { tracks } from "./tracks";

const store = createStore(
    rootReducer,
    { tracks },
    applyMiddleware(audioMiddleware)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)