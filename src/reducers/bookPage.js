const renderBook = (state, action) => {
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
