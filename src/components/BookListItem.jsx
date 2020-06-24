import React, { Fragment } from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <Fragment>
      <StyledImage src={coverImage} rounded />
      <TextContainer>
        <Title>{title}</Title>
        <Author>{author}</Author>
      </TextContainer>
      <OrderContainer>
        <Price>{`$${price}`}</Price>
        <Button onClick={onAddedToCart}>Add to cart</Button>
      </OrderContainer>
    </Fragment>
  );
};

const TextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

const OrderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`;

const Author = styled.span`
  font-size: 1.5em;
`;

const StyledImage = styled(Image)`
  width: 150px;
  height: auto;
`;

const Price = styled.span`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 1rem;
  color: tomato;
`;

const Title = styled.h3`
  font-size: 2em;
  font-weight: 700;
`;

export default BookListItem;
