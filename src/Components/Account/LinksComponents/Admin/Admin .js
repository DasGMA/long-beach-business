import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { avatarUpload, handleMediaFileChange } from '../../../../Redux/Actions/MediaUploadActions';
import '../../../../Styles/user-account.scss';
import Avatar from '../../../Reusable/Avatar';

export default function Admin() {
    const { data, selectedFile } = useSelector((state) => state.LoginReducer);
   
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
                    <Avatar 
                        alt={'Avatar for ' + data.userName}
                        src={`${data.avatar.imageUrl}?${new Date().getTime()}`}
                        type='file'
                        accept='image/*'
                        onChange={onChange}
                        multiple={false}
                        selectedFile={selectedFile}
                        onClick={onClick}
                    />
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