import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./container/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </div>
    );
  }
}

export default App;
