import React from 'react';
import {Switch, Route, Link, Redirect} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";
import Login from "./pages/Logib/Login";
import Register from "./pages/Register/Register";
import Author from "./pages/Author/Author";
import CreateTravel from "./pages/createTravel/createTravel";

function Routers(props) {
    if(props.auth==true) {
        return (
            <Switch>
                <Route path={'/'} exact component={MainPage}/>
                <Route path={'/about/:id'} exact component={AboutPage}/>
                <Route path={'/author/:id'} exact component={Author}/>
                <Route path={'/createTravel'} exact component={CreateTravel}/>
                <Redirect to={'/'}/>
            </Switch>
        );
    }
    else {
        return (
            <Switch>
                <Route path={'/login'} exact component={Login}/>
                <Route path={'/register'} exact component={Register}/>
                {/*<Redirect to={'/login'}/>*/}
            </Switch>
        )
    }
}

export default Routers;