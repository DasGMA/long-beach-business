import React from 'react';
import Button from '../Reusable/Button';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import '../../Styles/editCategoryForm.scss';
import { selectBusiness } from '../../Redux/Actions/BusinessActions';

export default function DeleteBusinessForm({ type }) {
    const { selectedBusiness } = useSelector(state => state.BusinessReducer);
    
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(selectBusiness(null));
    }

    const submitEdit = () => {
        //dispatch(adminDeleteBusiness(selectedBusiness._id));
        dispatch(selectBusiness(null));
        dispatch(toggleModal(''));
    }

    return (
        <div className='edit-category-form'>
             <div className='edit-header'>
                <h1>{`Are you sure you want to delete ${selectedBusiness.businessName} business?`}</h1>
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