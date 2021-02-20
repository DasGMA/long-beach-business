import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 275,
      },
    media: {
        height: 200,
    },
}))
function Category({ count, category, onClick, src}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea onClick={onClick}>
                <CardContent>
                    <Typography variant='h5' component='h2'>{category}</Typography>
                </CardContent>
                <CardMedia
                    className={classes.media}
                    image={src}
                    title={category}
                />
            </CardActionArea>
        </Card>        
    );
}

Category.defaultProps = {
    count: 0,
    category: '',
    onClick: () => {},
    src: 'https://lbo-images.s3.us-west-1.amazonaws.com/categories/default-category.png'
}

Category.propTypes = {
    count: PropTypes.number,
    category: PropTypes.string,
    onClick: PropTypes.func,
    src: PropTypes.string
}

export default Category;