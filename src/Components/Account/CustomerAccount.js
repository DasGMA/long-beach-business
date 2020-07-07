import React from 'react';
import SidebarMenu from './SidebarMenu';
import { Switch, Route } from 'react-router-dom';
import UserAccount from './UserAccount';
import '../../Styles/account.scss';

export default function CustomerAccount() {
    return (
        <div className='account'>
            <div className='account-inner'>
                <SidebarMenu />
                <Switch>
                    <Route exact path = '/account' component={UserAccount}/>
                </Switch>
            </div>
        </div>
    )
}