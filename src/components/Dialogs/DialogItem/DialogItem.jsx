import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog_item}>
            <NavLink className={navData => navData.isActive ? s.active : s.dialog_item}
                     to={path}>{props.text}</NavLink>
        </div>
    );
}


export default DialogItem