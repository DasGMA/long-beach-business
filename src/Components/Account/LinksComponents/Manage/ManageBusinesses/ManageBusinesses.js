import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBusinesses } from '../../../../../Redux/Actions/BusinessActions';
import Table from '../../../../Reusable/Table';
import Modal from '../../../../Reusable/Modal';
import EditBusinessForm from '../../../../Forms/EditBusinessForm';
import DeleteBusinessForm from '../../../../Forms/DeleteBusinessForm';

export default function ManageBusinesses() {
    const { businesses } = useSelector(state => state.BusinessReducer);
    const { visible, formType } = useSelector(state => state.ModalReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBusinesses());
    }, [dispatch])

    const getForms = () => {
        switch(formType) {
            case 'businessDelete':
                return <DeleteBusinessForm />;
            case 'businessEdit':
                return <EditBusinessForm />;
            default:
                return;
        }
    }

    return (
        <div>
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