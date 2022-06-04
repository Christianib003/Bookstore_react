import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <div className="bookItems">
        <div className="bookDetails">
          <span className="details">Comic</span>
          <h3 className="title">{ title }</h3>
          <span className="name">{ author }</span>
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
    </>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
