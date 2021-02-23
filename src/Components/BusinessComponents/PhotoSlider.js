import React, {useState} from 'react';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import { Card, CardMedia, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 275,
        minWidth: 275,
        position: 'relative'
      },
    media: {
        height: 275,
    },
    buttonGroup: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 140
    }
}))

export default function PhotoSlider({ images = [] }) {
    const [index, setIndex] = useState(0);
    const classes = useStyles();
    
    const slideRight = () => {
        if (images.length - 1 === index) return;
        setIndex(index => index + 1);
    }

    const slideLeft = () => {
        if (index === 0) return;
        setIndex(index => index - 1);
    }

    if (images.length === 0) return null;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component='img'
                src={images[index].location}
                title='Slider item'
            />
            <div className={classes.buttonGroup}>
                <IconButton
                    disabled={index === 0}
                    onClick={slideLeft}
                >
                    <LeftIcon 
                        color={index !== 0 ? 'secondary' : 'disabled'}
                        fontSize='large'
                    />
                </IconButton>
                <IconButton
                    disabled={index === images.length - 1}
                    onClick={slideRight}
                >
                    <RightIcon 
                        color={index !== images.length - 1 ? 'secondary' : 'disabled'}
                        fontSize='large'
                    />
                </IconButton>
            </div>
        </Card>
    )
}