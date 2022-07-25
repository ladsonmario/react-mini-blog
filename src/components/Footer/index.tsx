import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            © Copyright - <a href="https://github.com/ladsonmario" target="_blank">Ladson</a>
        </footer>
    );
}