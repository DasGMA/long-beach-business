import React from 'react';
import Button from '../Reusable/Button';
import { useSelector, useDispatch } from 'react-redux';
import { adminDeleteCategory } from '../../Redux/Actions/AdminActions';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { selectCategory } from '../../Redux/Actions/CategoriesActions';
import '../../Styles/editCategoryForm.scss';

export default function DeleteForm() {
    const { selectedCategory } = useSelector(state => state.CategoriesReducer);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(selectCategory(null));
    }

    const submitEdit = () => {
        dispatch(adminDeleteCategory(selectedCategory._id));
        dispatch(selectCategory(null));
        dispatch(toggleModal(''));
    }

    return (
        <div className='edit-category-form'>
             <div className='edit-header'>
                <h1>{`Are you sure you want to delete ${selectedCategory.categoryName} category?`}</h1>
            </div>
            <div className='buttons-container'>
                <Button 
                    icon="window-close"
                    iconSize={2} 
                    onClick={closeModal} 
                />
                <Button 
                    icon="check" 
                    iconSize={2} 
                    onClick={submitEdit} 
                />
            </div>
        </div>
    )
}