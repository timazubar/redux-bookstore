import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import BookList from "../BookList";

const HomePage = () => {
  return (
    <StyledBookListWrapper>
      <BookList />
    </StyledBookListWrapper>
  );
};

const StyledBookListWrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default HomePage;
