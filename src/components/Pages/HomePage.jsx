import React from "react";
import BookList from "../BookList";

const HomePage = () => {
  return (
    <BookList
      books={[
        {
          id: 1,
          title: "1984",
          author: "George Orwell",
        },
        {
          id: 2,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
        },
      ]}
    />
  );
};

export default HomePage;
