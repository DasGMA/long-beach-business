import React from "react";
import { useSelector } from "react-redux";
import CustomerAccount from "./CustomerAccount/CustomerAccount";
import BusinessAccount from "./LinksComponents/Business/Business";
import AdminAccount from "./AdminAccount/AdminAccount";

export default function Account() {
    const user = useSelector((state) => state.LoginReducer.data);
    const accountType = user.accountType;

    switch(accountType) {
        case 'admin':
            return <AdminAccount />;
        case 'business':
            return <BusinessAccount />;
        case 'customer':
            return <CustomerAccount />;
        default:
            return;
    }
}
