import s from "./Dialogs.module.css";
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

const Message = (props) =>{
    return(
        <div className={s.message}>{props.text}</div>
    )}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <DialogItem text={'An'} id={'1'}/>
                <DialogItem text={'And'} id={'2'}/>
                <DialogItem text={'Andr'} id={'3'}/>
                <DialogItem text={'Andre'} id={'4'}/>
                <DialogItem text={'Andrey'} id={'5'}/>
            </div>
            <div className={s.messages}>
                <Message text={'Hi'}/>
                <Message text={'How'}/>
                <Message text={'Why'}/>
            </div>
        </div>
    );
}

export default Dialogs