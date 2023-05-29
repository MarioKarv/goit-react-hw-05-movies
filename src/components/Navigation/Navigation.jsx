import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
const Navigation = () => {
    return (
      <nav className={css.nav}>
        <ul className={css.ul}>
          <li className={css.li}>
            <NavLink className={css.link} to="/">
              Home
            </NavLink>
          </li>
          <li className={css.li}>
            <NavLink className={css.link} to="/movies">
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}

export default Navigation