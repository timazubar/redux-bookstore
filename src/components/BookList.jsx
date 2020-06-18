import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

import BookListItem from "./BookListItem";
import { booksLoaded, booksRequested } from "../actions";
import { compose } from "../utils";
import Spinner from "./Spinner";
import withBookstoreService from "./withBookstoreService";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />;
    }

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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
