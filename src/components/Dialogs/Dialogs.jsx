import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogElements =
        state.dialogsData.map((name) => {
                return <DialogItem text={name.name} id={name.id}/>
            }
        )

    let messageElements =
        state.messagesData.map((message) => {
                return <Message text={message.message} id={message.id}/>
            }
        )
    let newMessageBody = state.newMessageBody

    let onSendMessage = () => {
        props.sendMessage()
    }

    let onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.addmessages}>
                    <textarea cols="5" rows="3"
                              value={newMessageBody}
                              onChange={onMessageChange}
                    />

                    <button onClick={onSendMessage}>sendMessage</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs