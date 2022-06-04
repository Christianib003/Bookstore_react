import React from 'react';

const AddBook = () => (
  <div className="add">
    <h3>ADD NEW BOOK</h3>
    <form className="add">
      <input type="text" placeholder="Book Title" className="bTitle" />
      <input type="text" className="field" placeholder="Author" />
      <input type="submit" value="ADD BOOK" className="buttn" />
    </form>
  </div>
);

export default AddBook;
