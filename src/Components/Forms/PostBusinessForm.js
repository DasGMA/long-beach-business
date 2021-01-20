import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNewBusiness, handleNewBusinessChange, postBusiness, removeBusinessImage} from '../../Redux/Actions/BusinessActions';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import Button from '../Reusable/Button';
import '../../Styles/postBusiness.scss';
import BusinessImage from '../Reusable/BusinessImage';

export default function PostBusinessForm() {
    const { categories } = useSelector(state => state.CategoriesReducer);
    const { newBusiness } = useSelector(state => state.BusinessReducer);

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(clearNewBusiness());
    }

    const submit = () => {
        dispatch(postBusiness());
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
console.log({newBusiness})

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
                        selectedFile={newBusiness.businessImages}
                        onChange={handleChange}
                        first={true}
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
                <div className='input-block'>
                <label>Business address</label>
                <div>
                    <div>
                        <input 
                            type='number'
                            name='streetApartmentNumber'
                            placeholder='Street number'
                            onChange={handleChange}
                            value={newBusiness.streetApartmentNumber}
                        /> 
                        <input 
                            type='text'
                            name='streetName'
                            placeholder='Street name'
                            onChange={handleChange}
                            value={newBusiness.streetName.toUpperCase()}
                        />
                    </div>
                    <div>
                        <input 
                            type='text'
                            name='country'
                            placeholder='Country'
                            onChange={handleChange}
                            value={newBusiness.country.toUpperCase()}
                            readOnly
                        /> 
                        <input
                            type='text'
                            name='state'
                            placeholder='State'
                            onChange={handleChange}
                            value={newBusiness.state.toUpperCase()}
                            readOnly
                        />
                        <input 
                            type='text'
                            name='city'
                            placeholder='City'
                            onChange={handleChange}
                            value={newBusiness.city.toUpperCase()}
                            readOnly
                        />
                        <input 
                            type='number'
                            name='zip'
                            placeholder='Zip code'
                            onChange={handleChange}
                            value={newBusiness.zip}
                        />
                    </div>
                </div>
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