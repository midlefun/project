import s from './App.module.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={s.app_wrapper_content}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile postsData={props.postsData}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs messagesData={props.messagesData} dialogsData={props.dialogsData}/> }/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
