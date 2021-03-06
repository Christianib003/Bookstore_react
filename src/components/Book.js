import { FaCircleNotch } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

const Book = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  if (books !== []) {
    return (
      <>
        {books.map((book) => (
          <div className="bookItems" key={book.id}>
            <div className="bookDetails">
              <h3 className="title">{book.title}</h3>
              <span className="name">{book.author}</span>
              <div className="actions">
                <ul className="action">
                  <li>
                    <button type="button">Comments</button>
                  </li>
                  <li>
                    <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
                  </li>
                  <li>
                    <button type="button">Edit</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="progress">
              <div className="progress-circle">
                <FaCircleNotch className="progress-circle" />
              </div>
              <div className="side">
                <span>96%</span>
                <span className="status">Completed</span>
              </div>
            </div>
            <div className="chapter">
              <span>CURRENT CHAPTER</span>
              <h3>Chapter 20</h3>
              <button type="button" className="btn" id={book.id}>Update progress</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return (<h2>Please add a book</h2>);
};

export default Book;
