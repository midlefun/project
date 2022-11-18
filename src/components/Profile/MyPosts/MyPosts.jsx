import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="3"></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi how are you' likeCount={12}/>
                <Post message='Its my first post' likeCount={10}/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts