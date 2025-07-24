import React from 'react';
import css from './BookList.module.css';
const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return <div>No books available.</div>;
  }

  return (
    <ul className={css.BookList}>
      {books.map(book => (
        <li key={book.id || book.title} className={css.BookItem}>
          <img
            src={book.book_image}
            className={css.BookImage}
            alt="#"
            title="#"
                  width={250}
                  height={350}
          />
          <div>
            <h3 className={css.BookTitle}>{book.title}</h3>
            <p className={css.BookAuthor}>{book.author}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
