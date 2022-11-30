import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {
    return (
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar state = {props.state.sidebar}/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile store={props.store}/>}/>
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/> }/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
