import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action)
        this._callSubscriber(this._state)
    },
}

window.store = store
export default store
