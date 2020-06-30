import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import BookListContainer from '../BookListContainer';
import ShoppingCartTable from '../ShoppingCartTable';

const HomePage = () => {
  return (
    <StyledBookListWrapper>
      <BookListContainer />
      <ShoppingCartTable />
    </StyledBookListWrapper>
  );
};

const StyledBookListWrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export default HomePage;
