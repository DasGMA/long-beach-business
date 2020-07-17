import React from 'react';
import SidebarMenu from '../SidebarMenu';
import { Switch, Route } from 'react-router-dom';
import Customer from './Customer';
import '../../../Styles/account.scss';

export default function CustomerAccount() {
    return (
        <div className='account'>
            <div className='account-inner'>
                <SidebarMenu />
                <Switch>
                    <Route exact path = '/account' component={Customer}/>
                </Switch>
            </div>
        </div>
    )
}