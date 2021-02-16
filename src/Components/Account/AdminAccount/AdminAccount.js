import React from 'react';
import { Route } from 'react-router-dom';
import '../../../Styles/account.scss';
import Admin from '../LinksComponents/Admin/Admin ';
import Manage from '../LinksComponents/Manage/Manage';

export default function AdminAccount() {
    return (
        <div className='account'>
            <div className='account-inner'>
                <Route exact path = '/account' component={Admin}/>
                <Route path = '/account/manage' component={Manage}/>
                <Route path = '/account/notifications' component={Admin}/>
                <Route path = '/account/messages' component={Admin}/>
                <Route path = '/account/settings' component={Admin}/>
            </div>
        </div>
    )
}