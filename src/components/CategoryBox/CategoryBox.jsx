import './CategoryBox.css';
const CategoryBox = () => {
  return (
    <div className="_categoryBox">
      <ul className="_list">
        <li className="_item">
          <a href="/category/all" className="_link">
            All categories
          </a>
        </li>
        <li className="_item">
          <a href="/category/fiction" className="_link">
            Fiction
          </a>
        </li>
        <li className="_item">
          <a href="/category/fiction" className="_link">
            Fiction
          </a>
        </li>
      </ul>
    </div>
  );
};

const CategoryLink = ({ to, title }) => {
  return (
    <li className="_item">
      <a href={to} className="_link">
        {title}
      </a>
    </li>
  );
};
export default CategoryBox;
