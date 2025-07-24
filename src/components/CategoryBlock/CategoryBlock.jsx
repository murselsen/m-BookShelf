import React from 'react';
import css from './CategoryBlock.module.css';

// Importing BookList component
import BookList from '../BookList/BookList';

const CategoryBlock = ({ title, books }) => {
  return (
    <div className={css.CategoryBlock}>
      <h2 className={css.Title}>{title}</h2>
      <BookList books={books} />
      <div className={css.ButtonContainer}>
        <button className={css.Button}>See More</button>
      </div>
    </div>
  );
};

export default CategoryBlock;
