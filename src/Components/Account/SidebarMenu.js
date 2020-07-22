import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../../Styles/sidebar-menu.scss";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../Redux/Actions/LogoutActions";

export default function SidebarMenu() {
    const user = useSelector((state) => state.LoginReducer.data);
    const accountType = user.accountType;

    const dispatch = useDispatch();
    const history = useHistory();
    const location = history.location.pathname;

    const logout = () => {
        dispatch(logoutAction());
        history.push('/home');
    }

    const click = (props) => {
        props.name !== 'account' ? 
            history.push(`/account/${props.name}`) : 
            history.push(`/${props.name}`);
    }

    const Button = (props) => {
        const arr = props.location.split('/');
        const location = arr[arr.length - 1];
        
        return (
            <button
                className = {location === props.name ? "button active" : "button"}
                onClick = {() => click(props)}
            >
            <i className={`fa fa-${props.icon}`}></i>{' '}{props.name}
            </button>
        )
    }

    return (
        <div className="sidebar-menu">
            <Button 
                name = 'account'
                location = {location}
                icon = 'user'
            />
            {
            accountType !== 'admin' ?
                <Button 
                    name = 'favourites'
                    location = {location}
                />
            : 
                <Button 
                    name = 'manage'
                    location = {location}
                    icon = 'tasks'
                />
            }
            <Button 
                name = 'notifications'
                location = {location}
                icon = 'bell'
            />
            <Button 
                name = 'messages'
                location = {location}
                icon = 'envelope'
            />
            <Button 
                name = 'following'
                location = {location}
                icon = 'users'
            />
            <Button 
                name = 'settings'
                location = {location}
                icon = 'cogs'
            />
            <button 
                className="button"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    );
}
