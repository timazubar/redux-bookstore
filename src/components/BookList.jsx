import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Col } from 'react-bootstrap';
import styled from 'styled-components';

import BookListItem from './BookListItem';
import { fetchBooks, bookAddedToCart } from '../actions';
import { compose } from '../utils';
import ErrorIndicator from './ErrorIndicator';
import Spinner from './Spinner';
import withBookstoreService from './withBookstoreService';

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

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

const Wrapper = styled(Col)`
  padding: 0;
`;

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
