import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

const isPrivilage = localStorage.getItem("isPrivilage");

if (isPrivilage === "Admin") {
  require("./assets/css/font-awesome.min.css");
  require("./assets/astro/css/bootstrap/bootstrap.min.css");
  require("./assets/astro/css/owlcarousel/owl.carousel.min.css");
  require("./assets/astro/css/style.css");
  require("./assets/astro/css/shotcode.css");
  require("./assets/astro/css/responsive.css");
  require("./assets/astro/css/hover.css");
  require("./assets/astro/css/m-nav.css");
  require("./assets/astro/css/magnific-popup.css");
} else {
  require("./assets/css/font-awesome.min.css");
  require("./assets/astro/css/bootstrap/bootstrap.min.css");
  require("./assets/astro/css/owlcarousel/owl.carousel.min.css");
  require("./assets/astro/css/style.css");
  require("./assets/astro/css/shotcode.css");
  require("./assets/astro/css/responsive.css");
  require("./assets/astro/css/hover.css");
  require("./assets/astro/css/m-nav.css");
  require("./assets/astro/css/magnific-popup.css");
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
