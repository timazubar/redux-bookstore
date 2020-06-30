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

export { bookRendered, bookRequested, bookError };
