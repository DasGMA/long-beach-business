import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function App() {
    return (
        <>
            <Navigation />
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </Switch>
            </main>
            <Footer />
        </>
    );
}
