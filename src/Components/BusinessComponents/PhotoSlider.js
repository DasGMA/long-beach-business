import React, {useState} from 'react';
import '../../Styles/photo-slider.scss';


export default function PhotoSlider({ images = [] }) {
    const [index, setIndex] = useState(0);
    
    const slideRight = () => {
        if (images.length - 1 === index) return;
        setIndex(index => index + 1);
    }

    const slideLeft = () => {
        if (index === 0) return;
        setIndex(index => index - 1);
    }
console.log(images)
    return (
        <div className='photo-slider'>
            <img 
                src={images[index].location}
                alt='Slider item'
            />
            <button 
                className={index !== 0 ? 'left-button' : 'left-button hidden'}
                onClick={slideLeft}
            >
                {"<"}
            </button>
            <button 
                className={index !== images.length - 1 ? 'right-button' : 'right-button hidden'}
                onClick={slideRight}
            >
                {">"}
            </button>
        </div>
    )
}