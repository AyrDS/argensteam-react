// 1) Tener la variable React en scope
import React from "react";
// 2) Tener la variable ReactDOM en scope
import ReactDOM from "react-dom";

// 3) Tener un elemento de React
import App from "./app";

import "./CSS/estilos.css";

// 4) Tener una funcion render corriendo
ReactDOM.render(<App/>, document.querySelector("#root"));