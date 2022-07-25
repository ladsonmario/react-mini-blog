import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { Post } from './types/Post';
import { API } from './api';
import { Header } from './components/Header';
import { AddPost } from './components/AddPost';
import { Posts } from './components/Posts';
import { Loading } from './components/Loading';
import { Error } from './components/Error';
import { Footer } from './components/Footer';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(()=> {
    loadingPosts();
  }, []);

  const loadingPosts = async () => {
    try {
      setLoading(true);
      let json = await API.getAllPosts();
      setLoading(false);
      setPosts(json);
    } catch(err) {
      setLoading(false);
      setPosts([]);
      alert('Ocorreu algum erro, tente novamente mais tarde!');
      console.error(err);
    }    
  }

  const handleAddPost = async (title: string, body: string) => {    
    let json = await API.addNewPost(title, body, 1);
    if(json.id) {
      alert('Publicação feita com sucesso!');
    } else {
      alert('Ocorreu algum erro na sua publicação!');
    }   
  }

  return (
    <div className={styles.container}>
      <Header />
      <AddPost functionAdd={handleAddPost} />  
      {loading && 
        <Loading />
      }
      {!loading &&
        <>
          {posts.map((item, index)=>(
            <Posts key={index} data={item} />
          ))}
        </>        
      }    
      {!loading && posts.length === 0 &&
        <Error />
      }  
      <Footer />
    </div>
  );
}

export default App;