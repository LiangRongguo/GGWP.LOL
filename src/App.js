import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/header/header.react";
import HomePage from "./pages/homepage/homepage.react";
import ChampionsPage from "./pages/champions/championsPage.react";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ScrollTop from "./components/scroll/scrollTop.react";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // subscriobe to this userRef for any change to this data
        // also get back the first state of the data
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      // when signing out, set the state to NULL
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="GGWP.LOL">
        <Header />
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
