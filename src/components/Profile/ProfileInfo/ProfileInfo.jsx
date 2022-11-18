import s from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div>
            <img src="https://botinki23.ru/static/img/mainpage/slider/slider_1.webp" alt=""/>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    );
}

export default ProfileInfo