export default class BookstoreService {
  data = [
    {
      id: 1,
      title: 'The Black Swan',
      author: 'Nassim Nicholas Taleb',
      price: 10,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41w4yuUG1mL._SX322_BO1,204,203,200_.jpg',
    },
    {
      id: 2,
      title: 'Antifragile',
      author: 'Nassim Nicholas Taleb',
      price: 12,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/419QSJTZ+bL._SX322_BO1,204,203,200_.jpg',
    },
    {
      id: 3,
      title: 'Skin in the Game',
      author: 'Nassim Nicholas Taleb',
      price: 15,
      coverImage:
        'https://images-na.ssl-images-amazon.com/images/I/41ObAlltSeL._SX328_BO1,204,203,200_.jpg',
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.99) {
          reject(new Error('err'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
