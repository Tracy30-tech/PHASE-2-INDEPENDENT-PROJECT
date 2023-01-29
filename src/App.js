import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Update from "./pages/Update";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={AboutUs} />
          <Route path="/support" component={Help} />
          <Route path="/login" component={Login} />
          <Route path="/update/:itemId" component={Update} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}
