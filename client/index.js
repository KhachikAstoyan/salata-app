import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import List from "./components/List";
import { RelayEnvironmentProvider } from "react-relay";
import Environment from "./relay/environment";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./style/style.css"
import OrderPage from "./components/OrderPage";

const Root = () => {
  return <RelayEnvironmentProvider environment={Environment}>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/">
              <OrderPage />
            </Route>
          </Switch>
        </Router>
      </div>
  </RelayEnvironmentProvider>;
};

ReactDOM.render(<Root />, document.querySelector("#root"));