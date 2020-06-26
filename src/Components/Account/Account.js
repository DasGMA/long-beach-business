import React from 'react';
import {useSelector} from 'react-redux';

function Account() {
    const {user} = useSelector(state => state.LoginReducer.data);
    return (
        <div>
            <p>Username: {user.userName}</p>
            <p>LoggedIn: {user.loggedIn}</p>
            <p>UserID: {user._id}</p>
            <p>Name: {user.firstName}</p>
            <p>Last Name{user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}

export default Account;