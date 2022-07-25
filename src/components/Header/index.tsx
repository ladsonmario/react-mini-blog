import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2>AranhaBlog</h2>
            <div>
                <button>Login</button>
                <button>Criar uma Conta</button>
            </div>            
        </header>
    );
}