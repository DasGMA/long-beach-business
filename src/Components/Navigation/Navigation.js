import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/navigation.scss";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../../Redux/Actions/LogoutActions";

import getStorePersistor from '../../Redux/store';

const { persistor } = getStorePersistor();

export default function Navigation() {
    const { loggedin } = useSelector((state) => state.LoginReducer);
    const history = useHistory();
    const location = history.location.pathname;

    const dispatch = useDispatch();

    const login = () => {
        history.push("/login");
    };

    const register = () => {
        history.push("/register");
    };

    const account = () => {
        history.push("/account");
    };

    const logout = () => {
        dispatch(logoutAction());
        persistor.purge()
            .then(() => {
            return persistor.flush()
            })
            .then(() => {
            persistor.pause()
            });
        history.push("/");
    };

    return (
        <nav className="navigation">
            <div className="inner-nav">
                {loggedin ? (
                    <>
                        <button
                            className={
                                location === "/account"
                                    ? "button active"
                                    : "button"
                            }
                            onClick={account}
                        >
                            Account
                        </button>
                        <button className="button" onClick={logout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className={
                                location === "/login"
                                    ? "button active"
                                    : "button"
                            }
                            onClick={login}
                        >
                            Login
                        </button>
                        <button
                            className={
                                location === "/register"
                                    ? "button active"
                                    : "button"
                            }
                            onClick={register}
                        >
                            Register
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
