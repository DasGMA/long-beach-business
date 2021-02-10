import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBusiness } from '../../../Redux/Actions/BusinessActions';
import { toggleModal } from '../../../Redux/Actions/ModalActions';
import { selectForReview } from '../../../Redux/Actions/ReviewActions';
import '../../../Styles/business-view.scss';
import PostReview from '../../Forms/PostReview';

import BusinessViewPhotoSlider from '../../Reusable/BusinessViewPhotoSlider';
import Modal from '../../Reusable/Modal';
import Reviews from '../../Reusable/Reviews';
import Spinner from '../../Reusable/Spinner/Spinner';
import BusinessViewBody from './BusinessViewbody';
import BusinessViewHeader from './BusinessViewHeader';

export default function BusinessView({ match }) {
    const { business, gettingBusiness, selectedBusiness } = useSelector(state => state.BusinessReducer);
    const { visible } = useSelector(state => state.ModalReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBusiness(selectedBusiness._id));

    }, [dispatch, selectedBusiness._id]);

    const selectToReview = () => {
        dispatch(selectForReview(business));
        //dispatch(toggleModal());
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
                {/* <Modal 
                    visible={visible}
                >
                    <PostReview />
                </Modal> */}
            </div> :
        <Spinner 
            loading={gettingBusiness === true}
            size='30rem'
        />
    )
}