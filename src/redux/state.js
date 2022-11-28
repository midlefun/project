const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi how are you', likeCount: 12},
                {id: 2, message: 'Its my first post', likeCount: 10},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            newMessageBody: '',
        },
        navBar: {
            friends: [
                {id: 1, src: "https://botinki23.ru/static/img/logo.png", name: 'Nik'},
                {id: 1, src: "https://botinki23.ru/static/img/logo.png", name: 'Nik'},
                {id: 1, src: "https://botinki23.ru/static/img/logo.png", name: 'Nik'},

            ],
        },
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer; // наблюдатель патерн (observer)
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likeCount: 0,
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }

        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }

        // else if (action.type === SEND_MESSAGE) {
        //     let newMessage = {
        //         id: 6,
        //         message: this._state.dialogsPage.newMessageBody,
        //     };
        //     this._state.dialogsPage.messagesData.push(newMessage);
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._callSubscriber(this._state)
        // }
        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            let newMessage = {
                id: 6,
                message: body,
            };
            this._state.dialogsPage.messagesData.push(newMessage);

            this._callSubscriber(this._state)

        }

        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.newMessage
            this._callSubscriber(this._state)
        }
    },
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


export const addPostActionCreator = () => ({type: ADD_POST}
)

export const onPostChangeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

window.store = store
export default store

// store