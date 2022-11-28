import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let newMessages = React.createRef()

    let sendMessege = ()=> {
        alert(newMessages.current.value)
    }

    let dialogElements =
        props.state.dialogsData.map((name) => {
                return <DialogItem text={name.name} id={name.id}/>
            }
        )

    let messageElements =
        props.state.messagesData.map((message) => {
                return <Message text={message.message} id={message.id}/>
            }
        )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.addmessages}>
                    <textarea ref={newMessages} cols="30" rows="10"></textarea>
                    <button onClick={sendMessege}>sendMessage</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs