import React from 'react';
import Button from '../Reusable/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import '../../Styles/editCategoryForm.scss';
import { adminPostCategory, clearNewCategory, setCategoryName, setCategoryDescription } from '../../Redux/Actions/AdminActions';

export default function PostCategoryForm() {
    const { newCategory } = useSelector(state => state.CategoriesReducer);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(clearNewCategory());
    }

    const submitEdit = () => {
        dispatch(adminPostCategory());
        dispatch(clearNewCategory());
        dispatch(toggleModal(''));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch(name) {
            case 'categoryName':
                dispatch(setCategoryName(value));
                return;
            case 'categoryDescription':
                dispatch(setCategoryDescription(value));
                return;
            default: 
                return;
        }
    }

    return (
        <div className='edit-category-form'>
            <div className='edit-header'>
                <h1>New Category</h1>
            </div>
            <form className='edit-body'>
                <div className='input-block'>
                    <label>New category name: *</label>
                    <input
                        type='text'
                        name='categoryName'
                        placeholder='New Category Name'
                        onChange={handleChange}
                        value={newCategory.categoryName}
                    />
                </div>
                <div className='input-block'>
                    <label>New category description: </label>
                    <textarea
                        type='text'
                        rows={6}
                        name='categoryDescription'
                        placeholder='Category description'
                        onChange={handleChange}
                        value={newCategory.categoryDescription}
                    />
                </div>
            </form>
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