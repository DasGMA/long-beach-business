import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { selectBusiness, updateBusiness } from '../../Redux/Actions/BusinessActions';

export default function EditBusinessForm() {
    const { selectedBusiness } = useSelector(state => state.BusinessReducer);
    const { categories } = useSelector(state => state.CategoriesReducer);

    const [business, setBusiness] = useState({});
    const [category, setCategory] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        setBusiness(selectedBusiness);
    }, [selectedBusiness]);

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(selectBusiness(null));
    }

    const submitEdit = () => {
        dispatch(updateBusiness(business, category));
        dispatch(selectedBusiness(null));
        dispatch(toggleModal(''));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch(name) {
            case 'category':
                setBusiness(business => ({...business, [name]: value}));
                setCategory(value);
                return;
            case 'businessName':
            case 'businessDescription':
            case 'phoneNumber':
            case 'businessEmail':
                setBusiness(business => ({...business, [name]: value}));
                return;
            default:
                return;
        }
    }


    return (
        <div className='edit-business'>
            
        </div>
    )
}