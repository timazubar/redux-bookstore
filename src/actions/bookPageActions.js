const bookRendered = (bookId) => {
  return {
    type: 'RENDER_BOOK_SUCCESS',
    payload: bookId,
  };
};

const bookRequested = () => {
  return {
    type: 'RENDER_BOOK_REQUEST',
  };
};

const bookError = (error) => {
  return {
    type: 'RENDER_BOOK_ERROR',
    payload: error,
  };
};

const selectBookById = (bookstoreService) => () => (dispatch) => {
  dispatch(bookRequested);
  bookstoreService
    .getBookId()
    .then((data) => dispatch(bookRendered(data)))
    .catch((err) => dispatch(bookError(err)));
};

export { bookRendered, bookRequested, bookError, selectBookById };
