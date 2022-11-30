import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar state = {props.state.sidebar}/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer/> }/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
