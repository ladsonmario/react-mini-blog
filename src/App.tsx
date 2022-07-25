import styles from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />      
    </div>
  );
}

export default App;