import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness } from '../../Redux/Actions/BusinessActions';
import '../../Styles/business-view.scss';

import BusinessViewPhotoSlider from '../Reusable/BusinessViewPhotoSlider';
import Spinner from '../Reusable/Spinner/Spinner';

export default function BusinessView() {
    const { business, gettingBusiness, selectedBusiness } = useSelector(state => state.BusinessReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBusiness(selectedBusiness._id));

    }, [dispatch, selectedBusiness._id])

    return (
        gettingBusiness === false && business !== null ? 
            <div className='business-view'>
                <BusinessViewPhotoSlider 
                    media={business.businessImages.images}
                />
                
            </div> :
        <Spinner 
            loading={gettingBusiness === true}
            size='30rem'
        />
    )
}