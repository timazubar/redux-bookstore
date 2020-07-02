import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from './BookList';
import BookstoreService from '../services/BookstoreService';
import { bookAddedToCart, fetchBooks } from '../actions';
import ErrorIndicator from './ErrorIndicator';
import Spinner from './Spinner';

const BookListContainer = () => {
  const dispatch = useDispatch();

  const onAddedToCartWithDispatch = (id) => dispatch(bookAddedToCart(id));

  const { books, loading, error } = useSelector((state) => state.bookList);

  useEffect(() => {
    dispatch(fetchBooks(BookstoreService));
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCartWithDispatch} />;
};

export default BookListContainer;
