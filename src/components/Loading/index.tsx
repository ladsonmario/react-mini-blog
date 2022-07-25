import styles from './Loading.module.css';

export const Loading = () => {
    return (
        <div className={styles.loading}>
            <span>Loading... <img src="assets/images/loading.gif" /></span>
        </div>
    );
}