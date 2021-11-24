import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.navbarBlock} dispatch={props.dispatch}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile state={props.state.profilePage}
                                                                 dispatch={props.dispatch.bind(props.store)}/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer state={props.state.dialogsPage}
                                                                   dispatch={props.dispatch.bind(props.store)}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
