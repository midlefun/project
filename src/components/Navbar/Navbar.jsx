import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = (props) => {


    let state = props.state

    let friendItem = state.friends.map(friend => {
            return (

                <div className={s.friend}>
                    <img src={friend.src} alt=""/>
                    <div className={s.friend_name}>{friend.name}</div>
                </div>

            )
        }
    )

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={"/profile"} className={navData => navData.isActive ? s.active : s.item}>profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/dialogs"} className={navData => navData.isActive ? s.active : s.item}>messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/news"} className={navData => navData.isActive ? s.active : s.item}>news</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/music"} className={navData => navData.isActive ? s.active : s.item}>music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={"/settings"} className={navData => navData.isActive ? s.active : s.item}>settings</NavLink>
            </div>
            <div className={s.item_friends}>
                Friends
                <div className={s.friends}>
                    {friendItem}
                </div>
            </div>

        </nav>
    );
}

export default Navbar