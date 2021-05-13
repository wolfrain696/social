import './App.css';
import Header from './componets/Header/Header'
import Nav from './componets/Nav/Nav'
import Profile from './componets/Profile/Profile'
import Dialogs from './componets/Dialogs/Dialogs'
import React from "react";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state}/>

                <div className='content'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}
                                                                  dispatch={props.dispatch}
                    />}/>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                                  dispatch={props.dispatch}

                    />}/>
                </div>
            </div>
    );
}

export default App;
