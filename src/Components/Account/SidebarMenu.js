import React from "react";
import "../../Styles/sidebar-menu.scss";
import { useHistory } from "react-router-dom";

export default function SidebarMenu() {
    const history = useHistory();
    const location = history.location.pathname;

    return (
        <div className="sidebar-menu">
            <button
                className={location === "/account" ? "button active" : "button"}
            >
                Account
            </button>
            <button
                className={location === "/favourites" ? "active" : "button"}
            >
                Favourites
            </button>
            <button
                className={location === "/notifications" ? "active" : "button"}
            >
                Notifications
            </button>
            <button className={location === "/messages" ? "active" : "button"}>
                Messages
            </button>
            <button className={location === "/following" ? "active" : "button"}>
                Following
            </button>
            <button className={location === "/settings" ? "active" : "button"}>
                Settings
            </button>
            <button className="button">Logout</button>
        </div>
    );
}
