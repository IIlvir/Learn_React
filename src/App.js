import './App.css';
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfile from "./components/UserProfile/UserProfile";
import HeaderComponent from "./components/Header/HeaderComponent";
import Login from "./components/Login/Login";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderComponent />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/settings' element={<Settings />}/>
                        <Route path='/users' element={<UsersContainer />}/>
                        <Route path='/users/*' element={<UserProfile />}/>
                        <Route path='/login' element={<Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
