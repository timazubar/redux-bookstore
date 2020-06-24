import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import CartPage from './Pages/CartPage';
import HomePage from './Pages/HomePage';
import ShopHeader from './ShopHeader';
import withBookstoreService from './withBookstoreService';

const App = () => {
  return (
    <StyledMain>
      <ShopHeader numItems={0} total={0} />
      <Switch>
        <Route path='/redux-bookstore' component={HomePage} exact />
        <Route path='/redux-bookstore/cart' component={CartPage} />
      </Switch>
    </StyledMain>
  );
};

const StyledMain = styled(Container)`
  color: black;
`;

export default withBookstoreService()(App);
