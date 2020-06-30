import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

import BookListItem from './BookListItem';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <Wrapper sm={7}>
      {books.map((book) => {
        return (
          <StyledCard key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </StyledCard>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled(Col)`
  padding: 0;
`;

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

export default BookList;
