import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from './BookList';
import { bookAddedToCart, fetchBooks } from '../actions';
// import { compose } from '../utils';
import ErrorIndicator from './ErrorIndicator';
import Spinner from './Spinner';
// import withBookstoreService from './withBookstoreService';

const BookListContainer = () => {
  const dispatch = useDispatch();

  const fetchBooksWithService = useCallback(
    (bookstoreService) => dispatch(fetchBooks(bookstoreService)()),
    [dispatch]
  );

  const onAddedToCartWithDispatch = (id) => dispatch(bookAddedToCart(id));

  const { books, loading, error } = useSelector((state) => state.bookList);

  useEffect(() => {
    fetchBooksWithService();
  }, [fetchBooksWithService]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCartWithDispatch} />;
};

export default BookListContainer;
