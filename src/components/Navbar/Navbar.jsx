import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return(
      <nav className={s.nav}>
          <div className={s.item}>
              <NavLink to={"/profile"} className={navData=>navData.isActive?s.active:s.item}>profile</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/dialogs"} className={navData=>navData.isActive?s.active:s.item}>messages</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/news"} className={navData=>navData.isActive?s.active:s.item}>news</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/music"} className={navData=>navData.isActive?s.active:s.item}>music</NavLink>
          </div>
          <div className={s.item}>
              <NavLink to={"/settings"} className={navData=>navData.isActive?s.active:s.item}>settings</NavLink>
          </div>
      </nav>
  );
}

export default Navbar