import React from 'react';
import '../../Styles/business-list.scss';
import {useSelector} from 'react-redux';
import BusinessComponent from './BusinessComponent';
import Filters from './Filters';


export default function CategoryBusinessesList() {
    const { businesses } = useSelector(state => state.CategoriesReducer);

    const renderBusinessList = () => {
        return businesses.map(business => {
            return <BusinessComponent
                        key={business.businessName}
                        {...business}
                    />
        })
    }

    return (
        <div className='category-business-list'>
            <Filters />
            <div className='business-list'>
                {renderBusinessList()}
            </div>
           
        </div>
    )
}