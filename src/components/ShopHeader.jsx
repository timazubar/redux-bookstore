import React from "react";
import { Row } from "react-bootstrap";
import styled from "styled-components";

const ShopHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#">Redux Bookstore</StyledLogo>
    </StyledHeader>
  );
};

const StyledHeader = styled(Row)`
  margin: 0;
`;

const StyledLogo = styled.a`
  color: black;
`;

export default ShopHeader;
