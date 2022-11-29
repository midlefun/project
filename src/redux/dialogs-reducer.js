const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogsData: [
        {id: 1, name: "An"},
        {id: 2, name: "And"},
        {id: 3, name: "Andr"},
        {id: 4, name: "Andre"},
        {id: 5, name: "Andreys"}
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How"},
        {id: 3, message: "Why"}
    ],
    newMessageBody: '',}

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({
                id: 4,
                message: body,
            });
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessage
            return state;
        default:
            return state;
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: text
    }
}

export default dialogsReducer