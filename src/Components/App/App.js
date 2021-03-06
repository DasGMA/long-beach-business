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
import BusinessView from "../BusinessComponents/BusinessView/BusinessView";
import PostReview from "../Forms/PostReview";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    main: {
        flex: '1 0 auto'
    },
    body: {
        display: 'flex',
        height: '100vh',
        flexDirection: 'column'
    }
}))

export default function App() {
    const {updated} = useSelector(state => state.CategoriesReducer);
    const {loggedin} = useSelector(state => state.LoginReducer);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        localStorage.getItem('Token') && dispatch(getUserInfo());
    },[dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch, updated]);

    return (
        <div className={classes.body}>
            <Navigation />
            <Container className={classes.main} disableGutters maxWidth={false}>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                    <ProtectedRoute path='/account' component={Account} loggedin={loggedin} />
                    <Route 
                        path='/:category'
                        render={ ({ match: { url } }) => (
                            <>
                                <Route exact path={`${url}/`} component={CategoryBusinessesList} />
                                <Route exact path={`${url}/:businessName`} component={BusinessView} />
                                <ProtectedRoute path={`${url}/:businessName/write-review`} component={PostReview} loggedin={loggedin} />
                            </>
                            )}
                    />
                </Switch>
            </Container>
            <Footer />
        </div>
    );
}
