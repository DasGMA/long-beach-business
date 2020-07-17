import React from 'react';
import {useSelector} from 'react-redux';
import '../../../Styles/user-account.scss';
import avatar from '../../../Assets/avatar.png';

export default function UserAccount() {
    const user = useSelector((state) => state.LoginReducer.data);

    return (
        <div className='user-account'>
            <div className='user-info'>
                <div className='user-info-container'>
                    <div className='avatar-container'>
                        <img
                            className='avatar-image'
                            alt={'Avatar for ' + user.userName}
                            src={avatar}
                        />
                        <div className='update-profile-pic'>
                            <label>Update profile picture</label>
                            <input 
                                type='file'
                                accept='image/*'
                            />
                        </div>
                    </div>
                    
                    <h1>{user.userName}</h1>
                </div>
            </div>
            <div>
                <p>First name: {user.firstName}</p>
                <p>Last name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Account type: {user.accountType}</p>
                <p>Zip code: {user.zip}</p>
            </div>
        </div>
    )
}