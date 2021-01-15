import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { avatarUpload, handleMediaFileChange } from '../../../../Redux/Actions/MediaUploadActions';
import '../../../../Styles/user-account.scss';

export default function Admin() {
    const { data } = useSelector((state) => state.LoginReducer);
   
    const dispatch = useDispatch();

    const onChange = (event) => {
        dispatch(handleMediaFileChange(event));
    }

    const onClick = () => {
        dispatch(avatarUpload());
    }

    return (
        <div className='user-account'>
            <div className='user-info'>
                <div className='user-info-container'>
                    <div className='avatar-container'>
                        <img
                            className='avatar-image'
                            alt={'Avatar for ' + data.userName}
                            src={`${data.avatar.imageUrl}?${new Date().getTime()}`}
                        />
                        <div className='update-profile-pic'>
                            <label>Update profile picture</label>
                            <input 
                                type='file'
                                accept='image/*'
                                onChange={onChange}
                                multiple={false}
                            />
                            <button onClick={onClick}>Submit</button>
                        </div>
                    </div>
                    
                    <h1>{data.userName}</h1>
                </div>
            </div>
            <div>
                <p>First name: {data.firstName}</p>
                <p>Last name: {data.lastName}</p>
                <p>Email: {data.email}</p>
                <p>Account type: {data.accountType}</p>
                <p>Zip code: {data.zip}</p>
            </div>
        </div>
    )
}