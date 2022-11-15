import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return(
      <nav className={s.nav}>
          <div className={s.item}>
              <NavLink to={"/profile"} activeClassName={s.activeLink}>profile</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/dialogs"}>messages</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/news"}>news</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/music"}>music</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/settings"}>settings</NavLink>
          </div>
      </nav>
  );
}

export default Navbar