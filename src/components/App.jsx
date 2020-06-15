import React from "react";
import { Route, Switch } from "react-router-dom";

import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import withBookstoreService from "./withBookstoreService";

const App = ({ bookstoreService }) => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/cart" component={CartPage} />
    </Switch>
  );
};

export default withBookstoreService()(App);
