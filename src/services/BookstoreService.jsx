export default class BookstoreService {
  data = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      price: 10,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/31ijiaTuJzL._SX282_BO1,204,203,200_.jpg",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 15,
      coverImage:
        "https://images-na.ssl-images-amazon.com/images/I/51uLvJlKpNL._SX321_BO1,204,203,200_.jpg",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error("err"));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}
