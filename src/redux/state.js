import {rerenderEntireTree} from "../rendr";

let state = {
    profilePage:{
        postsData: [
            {id:1, message:'Hi how are you',likeCount:12 },
            {id:2, message:'Its my first post',likeCount:10 },
        ],
    },
    dialogsPage:{
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
    },

    navBar: {
        friends:[
            {id: 1, src: "https://botinki23.ru/static/img/logo.png", name:'Nik'},
            {id: 1, src: "https://botinki23.ru/static/img/logo.png", name:'Nik'},
            {id: 1, src: "https://botinki23.ru/static/img/logo.png", name:'Nik'},

        ],
    },
}

export let addPost = (postMessage)=>{
    let newPost={
        id:3,
        message: postMessage,
        likeCount: 0,
    };

    state.profilePage.postsData.push(newPost)
    rerenderEntireTree()
}



export default state