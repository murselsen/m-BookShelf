import pageCss from '../Css/Page.module.css';
import css from './Home.module.css';

import CategoryList from '../../components/CategoryList/CategoryList';
import Navbar from '../../components/Navbar/Navbar';
import CategoryBlock from '../../components/CategoryBlock/CategoryBlock';

import { useSelector } from 'react-redux';
import { getAllBooks } from '../../redux/Book/selection';
const Home = () => {
  const books = useSelector(getAllBooks);
  console.log('Books Data:', books);
  return (
    <>
      <Navbar />
      <div className={pageCss.Page}>
        <aside className={pageCss.Sidebar}>
          <CategoryList />
        </aside>
        <main className={pageCss.PageContent}>
          <h1 className={pageCss.PageTitle}>
            Best Sellers <span>Books</span>
          </h1>
          <div className={css.CategoryBlocks}>
            {books.map((book, index) => {
              return (
                <CategoryBlock
                  key={index}
                  title={book.list_name}
                  books={book.books}
                />
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
