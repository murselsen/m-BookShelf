import css from './CategoryBox.module.css';
import { useLocation } from 'react-router-dom';
const CategoryBox = () => {
  return (
    <div className={css.CategoryBox}>
      <ul className={css.List}>
        <CategoryLink to={'/'} title={'All categories'} />
        <CategoryLink to={'/category/fiction'} title={'Fiction'} />
        <CategoryLink to={'/category/non-fiction'} title={'Non-Fiction'} />
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
export default CategoryBox;
