import pageCss from '../Css/Page.module.css';
import './Home.css';

import CategoryBox from '../../components/CategoryBox/CategoryBox';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={pageCss.Page}>
        <aside className={pageCss.Sidebar}>
          <CategoryBox />
        </aside>
        <main className={pageCss.PageContent}>
          <h1>Best Sellers Books</h1>
          <p>Your personal book collection manager.</p>
          <p>Browse categories, manage your books, and more!</p>
        </main>
      </div>
    </>
  );
};

export default Home;
