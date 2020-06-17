import React, { Fragment } from "react";
import { Button, Container, Image } from "react-bootstrap";
import styled from "styled-components";

const BookListItem = ({ book }) => {
  const { title, author, price, image } = book;
  return (
    <Fragment>
      <StyledImage src={image} rounded />
      <StyledTextContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor>{author}</StyledAuthor>
      </StyledTextContainer>
      <StyledOrderContainer>
        <StyledPrice>{`$${price}`}</StyledPrice>
        <Button>Add to cart</Button>
      </StyledOrderContainer>
    </Fragment>
  );
};

const StyledTextContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`;

const StyledOrderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 2rem;
`;

const StyledAuthor = styled.span`
  font-size: 1.5em;
`;

const StyledImage = styled(Image)`
  width: 150px;
  height: auto;
`;

const StyledPrice = styled.span`
  font-size: 2.5em;
  font-weight: 700;
  margin-bottom: 1rem;
  color: tomato;
`;

const StyledTitle = styled.h3`
  font-size: 2em;
  font-weight: 700;
`;

export default BookListItem;
