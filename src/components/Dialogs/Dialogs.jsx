import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.dialogsPage

    console.log(state)

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


    let newMessage = React.createRef()

    let sendMessage = () => {
        props.dispatch(sendMessageCreator())

    }

    let onMessageChange = () => {

        let text = newMessage.current.value
        let action = updateNewMessageBodyCreator(text)
        props.dispatch(action)

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
                              ref={newMessage}
                              value={newMessageBody}
                              onChange={onMessageChange}
                    />

                    <button onClick={sendMessage}>sendMessage</button>
                </div>
            </div>

        </div>
    );
}

export default Dialogs