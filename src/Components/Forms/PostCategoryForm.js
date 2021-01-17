import React from 'react';
import Button from '../Reusable/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import '../../Styles/editCategoryForm.scss';
import { 
    adminPostCategory, 
    clearNewCategory, 
    selectCategoryImage, 
    handleCategoryImageChange } from '../../Redux/Actions/AdminActions';
import CategoryImage from '../Reusable/CategoryImage';

export default function PostCategoryForm() {
    const { newCategory, selectedFile } = useSelector(state => state.CategoriesReducer);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(clearNewCategory());
        dispatch(selectCategoryImage(null));
    }

    const submitEdit = () => {
        dispatch(adminPostCategory());
        closeModal();
    }

    const onChange = (event) => {
        dispatch(handleCategoryImageChange(event));
    }

    const onClick = () => {
        dispatch(selectCategoryImage(null));
    }

    return (
        <div className='edit-category-form'>
            <div className='edit-header'>
                <h1>New Category</h1>
            </div>
            <form className='edit-body'>
                <div className='container'>
                    <CategoryImage 
                        alt={`${newCategory.categoryName}`}
                        src={selectedFile}
                        name='categoryImage'
                        onChange={onChange}
                        selectedFile={selectedFile}
                        onClick={onClick}
                        first={true}
                    />
                </div>
                <div className='input-block'>
                    <label>New category name:</label>
                    <input
                        type='text'
                        name='categoryName'
                        placeholder='New Category Name'
                        onChange={onChange}
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
                        onChange={onChange}
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