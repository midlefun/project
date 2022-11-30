import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea cols="30" rows="3"
                              ref={newPostElement}
                              value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts