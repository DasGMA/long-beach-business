import React from "react";
import { useSelector } from "react-redux";
import CustomerAccount from "./CustomerAccount";
import BusinessAccount from "./BusinessAccount";

function Account() {
    const user = useSelector((state) => state.LoginReducer.data);
    
    return user.accountType === "customer" ? (
        <CustomerAccount />
    ) : (
        <BusinessAccount />
    );
}

export default Account;
