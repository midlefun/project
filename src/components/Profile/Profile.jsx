import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <img src="https://botinki23.ru/static/img/mainpage/slider/slider_1.webp" alt=""/>
            <div>ava+description</div>
            <MyPosts/>
        </div>
    );
}

export default Profile