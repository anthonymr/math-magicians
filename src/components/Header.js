import { NavLink } from 'react-router-dom';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Math
        <span>Magicians</span>
      </div>
      <nav className={styles.navWrapper}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="Calculator">Calculator</NavLink>
        <NavLink to="Quote">Quote</NavLink>
      </nav>
    </header>
  );
}

export default Header;
