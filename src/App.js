import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.react";
import HomePage from "./pages/homepage/homepage.react";
import ChampionsPage from "./pages/champions/championsPage.react";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="GGWP.LOL">
        <Header />
        <div className="MainPage">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/champions" component={ChampionsPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
