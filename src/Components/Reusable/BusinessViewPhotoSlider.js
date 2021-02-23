import { Grid, GridList, GridListTile, IconButton, makeStyles } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import LeftIcon from '@material-ui/icons/ChevronLeft';
import RightIcon from '@material-ui/icons/ChevronRight';
import BusinessViewHeader from '../BusinessComponents/BusinessView/BusinessViewHeader';
import { BP } from '../../helpers';

const useStyles = makeStyles(theme => ({
    root: {
        position: 'relative'
    },
    slideContainer: {
        overflow: 'hidden'
    },
    buttonGroup: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute',
        top: '50%'
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        flexWrap: 'nowrap',
        overflow: 'hidden',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
      }
}))

export default function BusinessViewPhotoSlider({
    media=[],
    businessName,
    rating,
    reviewsCount
}) {

    const [cols, setCols] = useState(3);
    const bp = BP();
    
    useEffect(() => {
        const [xs, sm, md, lg, xl] = [...bp];
        if(xs) setCols(1);
        if(sm) setCols(2);
        if(md) setCols(3);
        if(lg) setCols(3);
        if(xl) setCols(4);
    }, [bp]);

    const [state, setState] = useState({
        rightButton: true,
        leftButton: false,
        scrollPosition: 0
    });

    const sliderRef = useRef();
    const classes = useStyles();
    
    const checkScroll = () => {
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollLeftMax) {
            setState(state => ({
                ...state,
                rightButton: false,
                leftButton: true
            }))
        }
        if (sliderRef.current.scrollLeft === 0) {
            setState(state => ({
                ...state,
                rightButton: true,
                leftButton: false
            }))
        }
        if (sliderRef.current.scrollLeft !== 0 && 
            sliderRef.current.scrollLeft < sliderRef.current.scrollLeftMax) {
            setState(state => ({
                ...state,
                rightButton: true,
                leftButton: true
            }))
        }
    }

    useEffect(() => {
        if (state.scrollPosition === 0) {
            sliderRef.current.scrollLeft = 0;
            checkScroll();
        }
    }, [state.scrollPosition])


    const renderMediaItems = () => (
       media.map((item) => (
        <GridListTile 
            key={item.location}
        >
            <img src={item.location} alt='Some alt text coming from item' />
        </GridListTile>
        ))
    )

    const slideRight = () => {
        setState(state => ({...state, scrollPosition: 200}));
        sliderRef.current.scrollLeft += 200;
        checkScroll();
    }

    const slideLeft = () => {
        setState(state => ({...state, scrollPosition: 200}));
        sliderRef.current.scrollLeft -= 200;
        checkScroll();
    }

    return (
        <Grid container className={classes.root}>
            <div className={classes.gridListRoot}>
                <GridList
                    ref={sliderRef}
                    className={classes.gridList}
                    cols={cols}
                    cellHeight={400}
                    spacing={0}
                >
                    {renderMediaItems()}
                </GridList>
            </div>
            <div className={classes.buttonGroup}>
                <IconButton
                    disabled={!state.leftButton}
                    onClick={slideLeft}
                >
                    <LeftIcon 
                        color={state.leftButton ? 'secondary' : 'disabled'}
                        fontSize='large'
                    />
                </IconButton>
                <IconButton
                    disabled={!state.rightButton}
                    onClick={slideRight}
                >
                    <RightIcon 
                        color={state.rightButton ? 'secondary' : 'disabled'}
                        fontSize='large'
                    />
                </IconButton>
            </div>
            <BusinessViewHeader 
                businessName={businessName}
                rating={rating}
                reviewsCount={reviewsCount}
            />
        </Grid>
    )
}