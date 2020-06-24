import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Account from "../Account/Account";
import ProtectedRoute from "../Auth/ProtectedRoute";

export default function App() {
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
