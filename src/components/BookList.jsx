import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

import BookListItem from "./BookListItem";
import { booksLoaded } from "../actions";
import { compose } from "../utils";
import withBookstoreService from "./withBookstoreService";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
    return (
      <Col sm={9}>
        {books.map((book) => {
          return (
            <StyledCard key={book.id}>
              <BookListItem book={book} />
            </StyledCard>
          );
        })}
      </Col>
    );
  }
}

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
