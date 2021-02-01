import React, { useEffect, useRef, useState } from 'react';

export default function BusinessViewPhotoSlider({
    media=[]
}) {

    const [state, setState] = useState({
        rightButton: false,
        leftButton: false,
        scrollPosition: 0
    });

    const sliderRef = useRef();

    console.log({MEDIA: media})
    
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


    const MediaItem = (item) => (
        <div className='business-view-media'>
            <img
                alt='Some alt text coming from item'
                src={item.item.location}
                style={{height: '100%', width: 'auto', objectFit: 'cover'}}
            />
        </div>
    )

    const renderMediaItems = () => {
        return media.splice(0, 20).map((item, index) => {
            return <MediaItem key={index} item={item} />
        })
    }

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
        <div className='media-slider-container'>
            <div className='business-view-media-slider' ref={sliderRef}>
                {renderMediaItems()}
            </div>
            <button 
                className={state.leftButton === true ? 'left-button' : 'left-button hidden'}
                onClick={slideLeft}
            >
                {"<"}
            </button>
            <button 
                className={state.rightButton === true ? 'right-button' : 'right-button hidden'}
                onClick={slideRight}
            >
                {">"}
            </button>
        </div>
    )
}