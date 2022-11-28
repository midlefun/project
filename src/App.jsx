import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Header/>

                <Navbar state = {props.state.navBar.friends}/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/> }/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
