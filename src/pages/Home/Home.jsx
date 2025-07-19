import pageCss from '../Css/Page.module.css';
import './Home.css';

import CategoryBox from '../../components/CategoryBox/CategoryBox';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <div className={pageCss.Page}>
      <Navbar />
      <aside className={pageCss.Sidebar}>
        <CategoryBox />
      </aside>
      <main className={pageCss.PageContent}>
        <h1>Welcome to m-BookShelf</h1>
        <p>Your personal book collection manager.</p>
        <p>Browse categories, manage your books, and more!</p>
      </main>
    </div>
  );
};

export default Home;
