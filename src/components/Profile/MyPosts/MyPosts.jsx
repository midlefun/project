import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef()

    let addPost = () =>{
        let text = newPostElement.current.value
        props.addPost(text);
    }

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} cols="30" rows="3"></textarea>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts