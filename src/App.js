import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AboutScreen from "./app/screens/AboutMeScreen";
import HomeScreen from "./app/screens/HomeScreen";
import Layout from "./app/components/Layout";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/about">
              <AboutScreen />
            </Route>
          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
