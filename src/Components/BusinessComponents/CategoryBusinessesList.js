import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryBusinessList } from '../../Redux/Actions/CategoriesActions';
import '../../Styles/business-list.scss';
import BusinessComponent from './BusinessComponent';
import Filters from './Filters';
import Spinner from '../Reusable/Spinner/Spinner';

export default function CategoryBusinessesList() {
    const { businesses, selectedCategory } = useSelector(state => state.CategoriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryBusinessList(selectedCategory._id));
    }, [dispatch, selectedCategory._id])

    const renderBusinessList = () => {
        return businesses.map(business => (
            <BusinessComponent
                key={business.businessName}
                {...business}
            />
        ))
    }
    
    return (
        businesses !== null ? 
        <div className='category-business-list'>
            <Filters />
            <div className='business-list'>
                <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                    <h1>{selectedCategory.category} Businesses</h1>
                </div>
                
                {renderBusinessList()}
            </div>
        </div> :
        <Spinner
            loading={businesses === null}
            size='30rem'
        />
    )
}