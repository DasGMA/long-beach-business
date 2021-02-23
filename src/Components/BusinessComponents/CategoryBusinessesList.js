import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryBusinessList } from '../../Redux/Actions/CategoriesActions';
import BusinessComponent from './BusinessComponent';
import Filters from './Filters';
import Spinner from '../Reusable/Spinner/Spinner';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2)
    }
}));

export default function CategoryBusinessesList() {
    const { businesses, selectedCategory } = useSelector(state => state.CategoriesReducer);
    const dispatch = useDispatch();
    const classes = useStyles();

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
        <div className={classes.root}>
            <Filters />
            <div >
                <div >
                    <h1>{selectedCategory.category} Businesses</h1>
                </div>
                
                {renderBusinessList()}
            </div>
        </div> :
        <Spinner
            size={30}
        />
    )
}