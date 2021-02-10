import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import '../../Styles/business-component.scss';
import PhotoSlider from './PhotoSlider';
import { selectBusiness } from '../../Redux/Actions/BusinessActions';
import Rating from '../Reusable/Rating';

export default function BusinessComponent(business) {
    const { businessName, 
            businessDescription, 
            averageRating,
            businessImages,
            businessAddress,
            offers,
            reviews,
            phoneNumber } = business;

    const history = useHistory();
    const location = useLocation().pathname;
    const dispatch = useDispatch();

    const trimmedText = () => {
        if (businessDescription.length > 250) {
            return businessDescription.substring(0, 250) + '... More'
        } else {
            return businessDescription;
        }
    }

    const navigateToBusiness = () => {
        dispatch(selectBusiness(business));
        history.push(`${location}/${businessName}`);
    }

    return (
        <div className='business-component'>
            <div className='inner-business-component'>
                <PhotoSlider
                    images={businessImages.images}
                />
                <div className='business-component-display' onClick={navigateToBusiness}>
                    <div className='business-component-header'>
                        <div className='business-name'>
                            <h1>{businessName}</h1>
                            <Rating rating={averageRating} /> 
                            <h2>Tags</h2>
                        </div>
                        <div className='business-address'>
                            <span>{phoneNumber}</span>
                            <span>{businessAddress.streetApartmentNumber}{' '}{businessAddress.streetName}</span>
                            <span>{businessAddress.city}</span>
                        </div>
                    </div>
                    <div className='business-component-body'>
                        <p>{trimmedText()}</p>
                    </div>
                    <div className='business-component-footer'>
                        <span>Offers: {offers.length}</span>
                        <i className='fa fa-thumbs-up fa-2x'> 0</i>
                        <i className='fa fa-thumbs-down fa-2x'> 0</i>
                        <i className='fas fa-comments-o fa fa-2x'> 0</i>
                        <span>Reviews: {reviews.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}