import React, { Component } from "react";
import "./App.css";
import Header from "./app/component/Header";
import Footer from "./app/component/Footer";
import HomeScreen from "./app/screens/HomeScreen";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Layout>
        <div className="app-content">
          <HomeScreen />
        </div>
      </Layout>
    );
  }
}

export default App;
