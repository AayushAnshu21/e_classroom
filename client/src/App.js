import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import HNavbar from "./Partials/Navbar";
import "./App.css";



function App() {
  return (
    <Fragment>
      <Router>
        <HNavbar />
        <section>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </section>
      </Router>
    </Fragment>
  );
}

export default App;
