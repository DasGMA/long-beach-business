import React from 'react';
import '../../Styles/business-component.scss';
import PhotoSlider from './PhotoSlider';

export default function BusinessComponent(business) {
    const { businessName, 
            businessDescription, 
            averageRating, 
            businessAddress, 
            phoneNumber } = business;

    const trimmedText = () => {
        if (businessDescription.length > 250) {
            return businessDescription.substring(0, 250) + '... More'
        } else {
            return businessDescription;
        }
    }


    return (
        <div className='business-component'>
            <div className='inner-business-component'>
                <PhotoSlider />
                <div className='business-component-display'>
                    <div className='business-component-header'>
                        <div className='business-name'>
                            <span>{businessName}</span>
                            <span>Rating: <span>{averageRating}</span></span> 
                            <span>Tags</span>
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
                        <span>Offers: 5</span>
                        <i className='fa fa-thumbs-up fa-2x'> 0</i>
                        <i className='fa fa-thumbs-down fa-2x'> 0</i>
                        <i className='fas fa-comments-o fa fa-2x'> 0</i>
                        <span>Reviews: 0</span>
                    </div>
                </div>
            </div>
        </div>
    )
}