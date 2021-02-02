import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRating } from '../../Redux/Actions/RatingActions';
import '../../Styles/star.scss';

function Rating({ rating, adjustable }) {

    const starRef = useRef();
    const dispatch = useDispatch();

    useEffect(() => {
        if (adjustable === false) {
            const stars = starRef.current.parentElement.getElementsByClassName('star');
            Array.from(stars).forEach(star => {
                star.style.color = rating >= parseInt(star.dataset.value) ? 'orange' : 'lightgrey'
            })
        }
    }, [rating, adjustable]);

    const onHover = (e) => {
        if (adjustable === false) return;
        const stars = e.target.parentElement.getElementsByClassName('star');
        const value = parseInt(e.target.dataset.value);
        dispatch(setRating(value));

        Array.from(stars).forEach(star => {
            star.style.color = value >= parseInt(star.dataset.value) ? 'orange' : 'grey'
        })
    }

    const onMouseOut = (e) => {
        if (adjustable === false) return;
        const value = parseInt(e.target.dataset.value);
        dispatch(setRating(value));
    }

    const renderStars = () => {
        return [...Array(5).keys()].map((star, index) => (
            <span
                className='star'
                key={index}
                data-value={index + 1}
                onMouseOver={(e) => onHover(e)}
            >
                &#9733;
            </span>
        ))
    }

    return(
        <div 
            ref={starRef}
            onMouseOut={onMouseOut}
        >
            {renderStars()}
        </div>
    )
}

Rating.defaultProps = {
    rating: 0,
    adjustable: false
}

Rating.propTypes = {
    rating: PropTypes.number,
    adjustable: PropTypes.bool
}

export default Rating;