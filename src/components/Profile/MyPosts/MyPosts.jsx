import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likeCount}/>)

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
                {postElement}
            </div>
        </div>
    );
}

export default MyPosts