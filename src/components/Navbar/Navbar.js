import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import backArrow from './backArrow.png';
import microphone from './microphone.png';
import settings from './settings.png';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => (
  <nav className={styles.NavBar}>
    <ul className={styles.navUl}>
      <li>
        <Link to="/">
          <img src={backArrow} alt="Back home" />
        </Link>
      </li>
      <li>
        <SearchBar />
      </li>
      <li>
        <img src={microphone} alt="Speaking search" />
      </li>
      <li>
        <img src={settings} alt="Settings" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
