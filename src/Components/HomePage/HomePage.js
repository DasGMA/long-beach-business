import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './Category';
import { useHistory } from 'react-router-dom';
import { selectCategory } from '../../Redux/Actions/CategoriesActions';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

}))

export default function HomePage() {
    const { categories } = useSelector((state) => state.CategoriesReducer);

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const onClick = (category, _id) => {
        dispatch(selectCategory({category, _id}));
        history.push(`/${category}`);
    }

    const renderCategories = () => {
        return categories.map(({_id, businessCount, categoryName, image}) => (
            <Category
                key={_id}
                count={businessCount}
                category={categoryName}
                onClick={() => onClick(categoryName, _id)}
                src={image.imageUrl}
            />
        ));
    };

    return (
        <>
            <Typography variant='h4' component='h1' align='center'>Categories</Typography>
            <Grid item>{renderCategories()}</Grid>
        </>
    );
}
