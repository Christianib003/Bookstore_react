import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => (
  <div className="allBooks">
    <Book
      title="Black Panther"
      author="Stan Lee"
    />
    <Book
      title="Black Panther"
      author="Stan Lee"
    />
    <Book
      title="Black Panther"
      author="Stan Lee"
    />
    <hr />
    <AddBook />
  </div>
);

export default Books;
