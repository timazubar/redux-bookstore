import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import ShopHeader from "./ShopHeader";
import withBookstoreService from "./withBookstoreService";

const App = ({ bookstoreService }) => {
  return (
    <StyledMain>
      <ShopHeader numItems={2} total={35} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </StyledMain>
  );
};

const StyledMain = styled(Container)`
  color: black;
`;

export default withBookstoreService()(App);
