import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBusinesses } from '../../../../../Redux/Actions/BusinessActions';
import Table from '../../../../Reusable/Table';
import Modal from '../../../../Reusable/Modal';
import EditBusinessForm from '../../../../Forms/EditBusinessForm';
import DeleteBusinessForm from '../../../../Forms/DeleteBusinessForm';
import PostBusinessForm from '../../../../Forms/PostBusinessForm';
import { toggleModal } from '../../../../../Redux/Actions/ModalActions';
import SearchBar from '../../../../Reusable/SearchBar';
import Button from '../../../../Reusable/Button';

export default function ManageBusinesses() {
    const { businesses, deletedBusiness, postingBusinessSuccess } = useSelector(state => state.BusinessReducer);
    const { visible, formType } = useSelector(state => state.ModalReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBusinesses());
    }, [dispatch]);

    useEffect(() => {
        deletedBusiness === true && dispatch(getAllBusinesses());
    }, [dispatch, deletedBusiness]);

    const getForms = () => {
        switch(formType) {
            case 'businessDelete':
                return <DeleteBusinessForm />;
            case 'businessEdit':
                return <EditBusinessForm />;
            case 'businessPost':
                return <PostBusinessForm />;
            default:
                return;
        }
    };

    const postBusiness = () => {
        dispatch(toggleModal('businessPost'));
    };

    return (
        <div>
            <div className='manage-categories-header'>
                <SearchBar />
                <Button 
                    icon='plus'
                    iconSize={2}
                    onClick={postBusiness}
                />
            </div>
            <Table 
                data={businesses}
                tableHeader={['id', 'business name', 'description', 'phone number', 'email']}
                dataNames={['_id', 'businessName', 'businessDescription','phoneNumber', 'businessEmail']}
            />

            <Modal visible={visible}>
                {getForms()}
            </Modal>
        </div>
    )
}