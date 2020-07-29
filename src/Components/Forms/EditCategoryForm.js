import React, { useState, useEffect } from 'react';
import Button from '../Reusable/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { selectCategory } from '../../Redux/Actions/CategoriesActions';
import '../../Styles/editCategoryForm.scss';
import { adminEditCategory } from '../../Redux/Actions/AdminActions';

export default function EditCategoryForm() {
    const { selectedCategory } = useSelector(state => state.CategoriesReducer);
    const [category, setCategory] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setCategory(selectedCategory);
    }, [selectedCategory]);

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(selectCategory(null));
    }

    const submitEdit = () => {
        dispatch(adminEditCategory(category));
        dispatch(selectCategory(null));
        dispatch(toggleModal(''));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch(name) {
            case 'categoryName':
                setCategory(category => ({...category, [name]: value}));
                return;
            case 'categoryDescription':
                setCategory(category => ({...category, [name]: value}));
                return;
            default: 
                return;
        }
    }

    return (
        <div className='edit-category-form'>
            <div className='edit-header'>
                <h1>Editing category {selectedCategory.categoryName}</h1>
            </div>
            <form className='edit-body'>
                <div className='input-block'>
                    <label>New category name: </label>
                    <input
                        type='text'
                        name='categoryName'
                        defaultValue={selectedCategory.categoryName}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-block'>
                    <label>New category description: </label>
                    <textarea
                        type='text'
                        rows={6}
                        name='categoryDescription'
                        defaultValue={selectedCategory.categoryDescription}
                        onChange={handleChange}
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