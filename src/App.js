import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.react";
import HomePage from "./pages/homepage/homepage.react";
import ChampionsPage from "./pages/champions/championsPage.react";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ScrollTop from "./components/scroll/scrollTop.react";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="GGWP.LOL">
        <Header currentUser={this.state.currentUser} />
        <div className="MainPage">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/champions" component={ChampionsPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
          <ScrollTop showBelow={250} />
        </div>
      </div>
    );
  }
}

export default App;
