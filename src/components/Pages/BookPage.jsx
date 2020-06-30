import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

import { fetchBooks, bookAddedToCart, setSelectedBookId } from '../../actions';
import BookListItem from '../BookListItem';
import { compose } from '../../utils';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import withBookstoreService from '../withBookstoreService';

const BookPage = ({ books, bookId, onAddedToCart, onSelectedBook }) => {
  const renderBook = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    return (
      <StyledCard key={book.id}>
        <BookListItem
          bookId={bookId}
          book={book}
          onAddedToCart={() => onAddedToCart(book.id)}
          onSelectedBook={() => onSelectedBook(book.id)}
        />
      </StyledCard>
    );
  };

  return <>{renderBook(bookId)}</>;
};

class BookPageContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const {
      bookId,
      books,
      loading,
      error,
      onAddedToCart,
      onSelectedBook,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <BookPage
        bookId={bookId}
        books={books}
        onAddedToCart={onAddedToCart}
        onSelectedBook={onSelectedBook}
      />
    );
  }
}

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

const mapStateToProps = ({ bookPage: { bookId }, bookList: { books } }) => {
  return { bookId, books };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
    onSelectedBook: (id) => dispatch(setSelectedBookId(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookPageContainer);
