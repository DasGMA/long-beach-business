import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Account from "../Account/Account";
import ProtectedRoute from "../Auth/ProtectedRoute";
import {useDispatch} from 'react-redux';
import { getUserInfo } from "../../Redux/Actions/AccountActions";

export default function App() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        localStorage.getItem('Token') && dispatch(getUserInfo());
    },[dispatch]);

    return (
        <>
            <Navigation />
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <ProtectedRoute path='/account' component={Account} />
                </Switch>
            </main>
            <Footer />
        </>
    );
}
