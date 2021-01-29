import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { 
    clearNewBusiness, 
    handleNewBusinessChange, 
    removeBusinessImage, 
    toDeleteFiles, 
    toUploadFiles, 
    updateBusiness 
} from '../../Redux/Actions/BusinessActions';
import Button from '../Reusable/Button';
import BusinessImage from '../Reusable/BusinessImage';

export default function EditBusinessForm() {
    const { newBusiness } = useSelector(state => state.BusinessReducer);
    const { categories } = useSelector(state => state.CategoriesReducer);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(clearNewBusiness());
        dispatch(toDeleteFiles(null));
        dispatch(toUploadFiles(null));
    }

    const submit = () => {
        dispatch(updateBusiness(newBusiness));
        closeModal();
    }

    const handleChange = (event) => {
        dispatch(handleNewBusinessChange(event));
    }

    const categoriesList = () => {
        return categories.map(category => {
            return <option key={category._id} value={category._id}>{category.categoryName}</option>
        });
    }

    const removeImage = (e) => {
        const index =  parseInt(e.target.attributes.fileindex.nodeValue);
        dispatch(removeBusinessImage(index));
    }


    return (
        <div className='post-business-form'>
            <div className='edit-header'>
                <h1>New Business</h1>
            </div>
            <form className='edit-body'>
                <div className='input-block'>
                    <label>Select business category: *</label>
                    <select
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="none">----------</option>
                        {categoriesList()}
                    </select>
                </div>
                <div className='container'>
                    <BusinessImage
                        src='https://lbo-media.s3-us-west-1.amazonaws.com/default-multi-images.png'
                        name='businessImages'
                        multiple={true}
                        selectedFile={newBusiness.businessImages.images}
                        onChange={handleChange}
                        first={false}
                        removeImage={removeImage}
                    />
                </div>
                <div className='input-block'>
                    <label>New business name:</label>
                    <input
                        type='text'
                        name='businessName'
                        placeholder='New Business Name'
                        onChange={handleChange}
                        value={newBusiness.businessName}
                    />
                </div>
                <div className='input-block'>
                    <label>New business description: </label>
                    <textarea
                        type='text'
                        rows={6}
                        name='businessDescription'
                        placeholder='Business description'
                        onChange={handleChange}
                        value={newBusiness.businessDescription}
                    />
                </div>
                <div className='input-block'>
                    <label>Business email </label>
                    <input
                        type='email'
                        name='businessEmail'
                        placeholder='Business email'
                        onChange={handleChange}
                        value={newBusiness.businessEmail}
                    />
                </div>
                <div className='input-block'>
                    <label>Business phone number </label>
                    <input
                        type='tel'
                        name='phoneNumber'
                        placeholder='Business phone number'
                        onChange={handleChange}
                        value={newBusiness.phoneNumber}
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
                    onClick={submit} 
                />
            </div>
        </div>
    )
}