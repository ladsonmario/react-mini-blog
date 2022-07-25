import styles from './Error.module.css';

export const Error = () => {
    return (
        <div className={styles.error}>
            <h2>Ocorreu algum erro!</h2>
            <img src="assets/images/error.png" />
            <h2>Tente novamente mais tarde!</h2>
        </div>
    );
}