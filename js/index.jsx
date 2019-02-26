require('./../sass/react-mui-pf.scss');
// core react+redux
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// our app
import App from "./App";
// i18n considerations
import { loadLiterals } from "./store/literals";
import store from "./store"; // from store/index.js
import loadLang from "./components/atoms/i18n";

const lang = loadLang();
store.dispatch(loadLiterals(lang));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
