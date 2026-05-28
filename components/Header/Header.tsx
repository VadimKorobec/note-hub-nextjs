import styles from './Header.module.css'

const Header = () => {
    return <header className={styles.header}>
        <h2>NoteHub</h2>
        <nav>
            <ul className={styles.navigation}>
                <li>Home</li>
                <li>Notes</li>
                <li>Profile</li>
                <li>About</li>
            </ul>
        </nav>
    </header>
}

export default Header;