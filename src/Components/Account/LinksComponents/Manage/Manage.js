import React from 'react';
import { Link, Route } from 'react-router-dom';
import '../../../../Styles/admin-manage.scss';
import ManageCategories from './ManageCatregories/ManageCategories';
import ManageBusinesses from './ManageBusinesses/ManageBusinesses';
import ManageUsers from './ManageUsers/ManageUsers';

const tabs = () => {
    const tabsList = ['categories', 'businesses', 'users'];
    const names = ['sitemap', 'briefcase', 'users'];
    return tabsList.map((tab, index) => {
        return (
            <Link key={index} to={`/account/manage/${tab}`} >
                <i className={`fa fa-${names[index]}`}> {tab.toUpperCase()}</i>
            </Link>
        )
    });
}

export default function Manage() {

    return (
        <div className='admin-manage'>
            <div className='tabs'>
                {tabs()}
            </div>
            <Route path='/account/manage/categories' component={ManageCategories}/>
            <Route path='/account/manage/businesses' component={ManageBusinesses}/>
            <Route path='/account/manage/users' component={ManageUsers}/>
        </div>
    )
}