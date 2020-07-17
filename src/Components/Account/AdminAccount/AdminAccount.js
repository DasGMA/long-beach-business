import React from 'react';
import SidebarMenu from '../SidebarMenu';
import { Switch, Route } from 'react-router-dom';
import '../../../Styles/account.scss';
import Admin from './Admin ';

export default function AdminAccount(props) {
    console.log(props)
    return (
        <div className='account'>
            <div className='account-inner'>
                <SidebarMenu />
                <Route exact path = '/account' component={Admin}/>
            </div>
        </div>
    )
}