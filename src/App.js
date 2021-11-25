import './App.css';
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <NavbarContainer />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile />}/>
                        <Route path='/dialogs/*' element={<DialogsContainer />}/>
                        <Route path='/music' element={<Music />}/>
                        <Route path='/news' element={<News />}/>
                        <Route path='/settings' element={<Settings />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
