import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => (
  <div className="allBooks">
    <Book />
    <hr />
    <AddBook />
  </div>
);

export default Books;
