const renderBook = (state, action) => {
  if (state === undefined) {
    return {
      books: [],
      loading: false,
      error: null,
      bookId: null,
    };
  }
  switch (action.type) {
    case 'SET_SELECTED_BOOK_ID':
      return {
        bookId: action.payload,
      };
    default:
      return state;
  }
};

export default renderBook;
