import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Route, Switch} from 'react-router-dom';

import {isMobile} from 'react-device-detect';

import './css/index.css';

//IMPORT COMPONENTS
import Footer from './import/components/Footer';
//IMPORT TEMPLATE
import Home from './import/template/Home';
import Profile from './import/template/Profile';
import Upload from './import/template/Upload';
import Follow from './import/template/Follow';
import Chat from './import/template/Chat';
//DESKTOP HIDE
import Desktop from './import/template/Desktop';


// import './css/App.css';

//DEAFULT
const App = ()=>{
    //
    if(isMobile){
        return (
            <HashRouter>
                <Switch>
                    <Route path="/chat" component={Chat}></Route>
                    <Route path="/follow" component={Follow}></Route>
                    <Route path="/me" component={Profile}></Route>
                    <Route path="/" component={Home}></Route>
                </Switch>
    
                <Footer />
            </HashRouter>
        );
    }

    return (
        <Desktop />
    );
}

export default App;

//Render DOM
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);