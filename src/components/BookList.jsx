import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col } from "react-bootstrap";
import styled from "styled-components";

import BookListItem from "./BookListItem";
import { fetchBooks } from "../actions";
import { compose } from "../utils";
import ErrorIndicator from "./ErrorIndicator";
import Spinner from "./Spinner";
import withBookstoreService from "./withBookstoreService";

const BookList = ({ books }) => {
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
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} />;
  }
}

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
