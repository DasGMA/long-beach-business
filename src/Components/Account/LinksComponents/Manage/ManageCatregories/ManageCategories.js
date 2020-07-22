import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../../../Redux/Actions/CategoriesActions';
import Table from '../../../../Reusable/Table';

export default function ManageCategories() {
    const { categories } = useSelector(state => state.CategoriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div>
            <Table 
                data={categories}
                tableHeader={['id', 'category name', 'description', 'businesses count']}
                dataNames={['_id', 'categoryName', 'categoryDescription','businessCount']}
            />
        </div>
    )
}