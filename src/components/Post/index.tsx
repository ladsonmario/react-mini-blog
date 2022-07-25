import styles from './Post.module.css';

export const Post = () => {
    return (
        <section className={styles.section}>
            <div className={styles.profile}>                
                <img src="../public/assets/images/profile.jpg" />
            </div>
            <div className={styles.newPost}>
                <input type="text" placeholder="Título" />
                <textarea placeholder="Compartilhe com seus amigos o que você está pensando"></textarea>
                <button>Publicar</button>
            </div>
        </section>
    );
}