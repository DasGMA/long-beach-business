import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRating } from '../../Redux/Actions/RatingActions';
import Rating from '@material-ui/lab/Rating';

function StarRating({ rating, notAdjustable }) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setRating(0));
    }, [dispatch])

    const onChange = (event, newValue) => {
        dispatch(setRating(newValue));
      }

    return(
        <Rating 
            value={rating}
            onChange={onChange}
            readOnly={notAdjustable}
            precision={0.1}
        />
    )
}

StarRating.defaultProps = {
    rating: 0,
    notAdjustable: true
}

StarRating.propTypes = {
    rating: PropTypes.number,
    notAdjustable: PropTypes.bool
}

export default StarRating;