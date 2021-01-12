import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../../../../Redux/Actions/CategoriesActions';
import Table from '../../../../Reusable/Table';
import Modal from '../../../../Reusable/Modal';
import EditCategoryForm from '../../../../Forms/EditCategoryForm';
import DeleteCategoryForm from '../../../../Forms/DeleteCategoryForm';
import SearchBar from '../../../../Reusable/SearchBar';
import Button from '../../../../Reusable/Button';
import '../../../../../Styles/manage-categories.scss';
import { toggleModal } from '../../../../../Redux/Actions/ModalActions';
import PostCategoryForm from '../../../../Forms/PostCategoryForm';

export default function ManageCategories() {
    const { categories } = useSelector(state => state.CategoriesReducer);
    const { visible, formType } = useSelector(state => state.ModalReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const getForms = () => {
        switch(formType) {
            case 'categoryDelete':
                return <DeleteCategoryForm />;
            case 'categoryEdit':
                return <EditCategoryForm />;
            case 'categoryPost':
                return <PostCategoryForm />;
            default:
                return;
        }
    }

    const postCategory = () => {
        dispatch(toggleModal('categoryPost'));
    }

    return (
        <div className='manage-categories'>
            <div className='manage-categories-header'>
                <SearchBar />
                <Button 
                    icon='plus'
                    iconSize={2}
                    onClick={postCategory}
                />
            </div>
            <div className='header-title'>
                <h1>Categories List</h1>
            </div>
            <Table 
                data={categories}
                tableHeader={['id', 'category name', 'description', 'businesses count']}
                dataNames={['_id', 'categoryName', 'categoryDescription','businessCount']}
            />

            <Modal
                visible={visible}
            >
                {getForms()}
            </Modal>

        </div>
    )
}