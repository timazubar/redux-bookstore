import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import BookList from "../BookList";
import ShoppingCartTable from "../ShoppingCartTable";

const HomePage = () => {
  return (
    <StyledBookListWrapper>
      <BookList />
      <ShoppingCartTable />
    </StyledBookListWrapper>
  );
};

const StyledBookListWrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default HomePage;
