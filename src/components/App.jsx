import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { BookPage, CartPage, HomePage } from './Pages';
import ShopHeader from './ShopHeader';
import withBookstoreService from './withBookstoreService';

const App = () => {
  return (
    <StyledMain>
      <ShopHeader numItems={0} total={0} />
      <Switch>
        <Route path='/redux-bookstore' component={HomePage} exact />
        <Route path='/redux-bookstore/cart' component={CartPage} />
        <Route path='/redux-bookstore/:id' component={BookPage} />
      </Switch>
    </StyledMain>
  );
};

const StyledMain = styled(Container)`
  color: black;
`;

export default withBookstoreService()(App);
