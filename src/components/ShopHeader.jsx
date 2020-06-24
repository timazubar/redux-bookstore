import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShopHeader = ({ itemsCount, itemsTotal }) => {
  return (
    <Header>
      <HeaderTitle to='/redux-bookstore'>Redux Bookstore</HeaderTitle>
      <Cart to='/redux-bookstore/cart'>
        <i className='cart-iron fa fa-shopping-cart' />
        {itemsCount} items (${itemsTotal})
      </Cart>
    </Header>
  );
};

const Header = styled(Row)`
  justify-content: space-between;
  margin: 0;
  font-size: 2rem;
`;

const HeaderTitle = styled(Link)`
  font-weight: 700;
  color: black;
`;

const Cart = styled(Link)`
  color: black;
`;

const mapStateToProps = ({ shopHeader: { numItems, total } }) => {
  return {
    itemsCount: numItems,
    itemsTotal: total,
  };
};

export default connect(mapStateToProps)(ShopHeader);
