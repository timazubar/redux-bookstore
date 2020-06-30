const setSelectedBookId = (bookId) => {
  return {
    type: 'SET_SELECTED_BOOK_ID',
    payload: bookId,
  };
};

export { setSelectedBookId };
