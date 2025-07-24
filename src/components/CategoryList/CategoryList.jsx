import css from './CategoryList.module.css';
import { useLocation } from 'react-router-dom';
const CategoryList = () => {
  const categories = [
    { to: '/', title: 'All categories' },
    { to: '#', title: 'Combined Print and E-Book Fiction' },
    { to: '#', title: 'Combined Print and E-Book Nonfiction' },
    { to: '#', title: 'Hardcover Fiction' },
    { to: '#', title: 'Hardcover Nonfiction' },
    { to: '#', title: 'Paperback Trade Fiction' },
    { to: '#', title: 'Paperback Nonfiction' },
    { to: '#', title: 'E-Book Fiction' },
    { to: '#', title: 'E-Book Nonfiction' },
    { to: '#', title: 'Advice, How-To & Miscellaneous' },
    { to: '#', title: 'Graphic Books and Manga' },
    { to: '#', title: 'Children’s Picture Books' },
    { to: '#', title: 'Middle Grade Hardcover' },
    { to: '#', title: 'Young Adult Hardcover' },
  ];

  return (
    <div className={css.CategoryList}>
      <ul className={css.List}>
        {categories.map((category, index) => (
          <CategoryLink key={index} to={category.to} title={category.title} />
        ))}
      </ul>
    </div>
  );
};

const CategoryLink = ({ to, title }) => {
  const location = useLocation();

  return (
    <li className={css.Item}>
      <a
        href={to}
        className={
          location.pathname === to ? `${css.Link} ${css.Active}` : css.Link
        }
      >
        {title}
      </a>
    </li>
  );
};
export default CategoryList;
