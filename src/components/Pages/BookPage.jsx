import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

import { fetchBooks, bookAddedToCart } from '../../actions';
import BookListItem from '../BookListItem';
import { compose } from '../../utils';
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import withBookstoreService from '../withBookstoreService';

const BookPage = ({ books, onAddedToCart }) => {
  const renderBook = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    return (
      <StyledCard key={book.id}>
        <BookListItem
          bookId={bookId}
          book={book}
          onAddedToCart={() => onAddedToCart(book.id)}
        />
      </StyledCard>
    );
  };

  return <>{renderBook(books[0].id)}</>;
};

class BookPageContainer extends Component {
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

    return <BookPage books={books} onAddedToCart={onAddedToCart} />;
  }
}

const StyledCard = styled(Card)`
  flex-direction: row;
  margin: 1rem;
`;

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: () => dispatch(fetchBooks(bookstoreService)()),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookPageContainer);
