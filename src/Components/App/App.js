import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Account from "../Account/Account";
import ProtectedRoute from "../Auth/ProtectedRoute";
import {useDispatch, useSelector} from 'react-redux';
import { getUserInfo } from "../../Redux/Actions/AccountActions";
import { getCategories } from "../../Redux/Actions/CategoriesActions";
import CategoryBusinessesList from "../BusinessComponents/CategoryBusinessesList";

export default function App() {
    const {updated} = useSelector(state => state.CategoriesReducer);
    const {loggedin} = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        localStorage.getItem('Token') && dispatch(getUserInfo());
    },[dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch, updated]);

    return (
        <>
            <Navigation />
            <main>
                <Switch>
                    <Route exact path='/'>
                        <HomePage />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/register'>
                        <Register />
                    </Route>
                    <ProtectedRoute path='/account' component={Account} loggedin={loggedin}/>
                    <Route path='/:category' component={CategoryBusinessesList}/>
                </Switch>
            </main>
            <Footer />
        </>
    );
}
