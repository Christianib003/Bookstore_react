import React from 'react';

const Book = () => (
  <div className="bookItems">
    <div className="bookDetails">
      <span className="details">Comics</span>
      <h3 className="title">Black Panther</h3>
      <span className="name">Stan Lee</span>
      <div className="actions">
        <ul className="action">
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>
    </div>
    <div className="progress">
      <span>77%</span>
      <span className="status">Completed</span>
    </div>
    <div className="chapter">
      <span>CURRENT CHAPTER</span>
      <h3>Chapter 20</h3>
      <button type="button" className="btn">Update progress</button>
    </div>
  </div>
);

export default Book;
