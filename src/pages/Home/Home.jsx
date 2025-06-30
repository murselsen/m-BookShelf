import '../Css/Page.css';
import './Home.css';

import CategoryBox from '../../components/CategoryBox/CategoryBox';

const Home = () => {
  return (
    <div className="Page">
      <aside className="Sidebar">
        <CategoryBox />
      </aside>
      <main className="PageContent">
        <h1>Welcome to m-BookShelf</h1>
        <p>Your personal book collection manager.</p>
        <p>Browse categories, manage your books, and more!</p>
      </main>
    </div>
  );
};

export default Home;
