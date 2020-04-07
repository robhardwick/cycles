import React from "react";
import ReactDOM from "react-dom";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "./css/styles.css";

import App from "./js/components/App";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;