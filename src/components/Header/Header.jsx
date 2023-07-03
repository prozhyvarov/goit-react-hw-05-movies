import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
  return (
    <nav>
      <ul className={css.nav}>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink className={css.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
