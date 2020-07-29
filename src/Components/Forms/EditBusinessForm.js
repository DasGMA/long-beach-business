import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../Redux/Actions/ModalActions';
import { selectBusiness } from '../../Redux/Actions/BusinessActions';

export default function EditBusinessForm() {
    const { selectedBusiness } = useSelector(state => state.BusinessReducer);
    const [business, setBusiness] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setBusiness(selectedBusiness);
    }, [selectedBusiness]);

    const closeModal = () => {
        dispatch(toggleModal(''));
        dispatch(selectBusiness(null));
    }

    const submitEdit = () => {
        //dispatch(adminEditCategory(category));
        dispatch(selectedBusiness(null));
        dispatch(toggleModal(''));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch(name) {
            default:
                return;
        }
    }


    return (
        <div>

        </div>
    )
}