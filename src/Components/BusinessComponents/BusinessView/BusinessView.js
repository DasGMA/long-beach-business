import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness } from '../../../Redux/Actions/BusinessActions';
import { selectForReview } from '../../../Redux/Actions/ReviewActions';
import '../../../Styles/business-view.scss';

import BusinessViewPhotoSlider from '../../Reusable/BusinessViewPhotoSlider';
import Reviews from '../../Reusable/Reviews';
import Spinner from '../../Reusable/Spinner/Spinner';
import BusinessViewBody from './BusinessViewbody';
import BusinessViewHeader from './BusinessViewHeader';

export default function BusinessView({ match }) {
    const { business, gettingBusiness, selectedBusiness } = useSelector(state => state.BusinessReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness(selectedBusiness._id));

    }, [dispatch, selectedBusiness._id]);

    const selectToReview = () => {
        dispatch(selectForReview(business));
    }

    return (
        gettingBusiness === false && business !== null ? 
            <div className='business-view'>
                <BusinessViewPhotoSlider 
                    media={business.businessImages.images}
                />
                <div className='business-view-inner-container'>
                    <BusinessViewHeader
                        businessName={business.businessName}
                        rating={business.averageRating}
                        reviewsCount={business.reviews.length}
                    />
                    <BusinessViewBody
                        businessDescription={business.businessDescription}
                        selectForReview={selectToReview}
                        match={match}
                    />
                    <Reviews reviews={business.reviews} />
                </div>
            </div> :
        <Spinner 
            loading={gettingBusiness === true}
            size='30rem'
        />
    )
}