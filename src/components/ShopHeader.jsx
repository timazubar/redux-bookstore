import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ShopHeader = ({ numItems, total }) => {
  return (
    <StyledHeader>
      <StyledTitle to="/">Redux Bookstore</StyledTitle>
      <StyledCart to="/cart">
        <i className="cart-iron fa fa-shopping-cart" />
        {numItems} items (${total})
      </StyledCart>
    </StyledHeader>
  );
};

const StyledHeader = styled(Row)`
  justify-content: space-between;
  margin: 0;
  font-size: 2rem;
`;

const StyledTitle = styled(Link)`
  font-weight: 700;
  color: black;
`;

const StyledCart = styled(Link)`
  color: black;
`;

export default ShopHeader;
