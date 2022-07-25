import styles from './Posts.module.css';
import { Post } from '../../types/Post';

type Props = {
    data: Post;
}

export const Posts = ({data}: Props) => {
    return (
        <div className={styles.posts}>
            <div className={styles.profile}>                
                <img src="https://picsum.photos/150" />
            </div>
            <div className={styles.postsArea}>                
                <small>Usuário: {data.userId}</small>
                <h4>{data.title}</h4>                
                <p>{data.body}</p>
            </div>
            <div className={styles.like}>♡</div>
        </div>
    );
}