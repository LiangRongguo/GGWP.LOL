import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.react";
import HomePage from "./pages/homepage/homepage.react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="GGWP.LOL">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
