import renderBook from './bookPage';
import updateBookList from './bookList';
import updateShoppingCart from './shoppingCart';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
    shopHeader: updateShoppingCart(state, action),
    bookPage: renderBook(state, action),
  };
};

export default reducer;
