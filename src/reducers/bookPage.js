const renderBook = (state, action) => {
  if (state === undefined) {
    return {
      bookId: null,
      loading: false,
      error: null,
    };
  }
  switch (action.type) {
    case 'RENDER_BOOK_SUCCESS':
      return {
        bookId: action.payload,
        loading: false,
        error: null,
      };
    case 'RENDER_BOOK_REQUEST':
      return {
        bookId: null,
        loading: true,
        error: null,
      };
    case 'RENDER_BOOK_ERROR':
      return {
        bookId: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state.bookPage;
  }
};

export default renderBook;
