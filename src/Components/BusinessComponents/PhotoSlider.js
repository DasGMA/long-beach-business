import React, {useState} from 'react';
import '../../Styles/photo-slider.scss';
import lb1 from '../../Assets/lb1.jpg';
import lb2 from '../../Assets/lb2.jpg';
import lb3 from '../../Assets/lb3.jpg';

export default function PhotoSlider(images) {
    const [index, setIndex] = useState(0);
    const arr = [lb1, lb2, lb3];

    const slideRight = () => {
        if (arr.length - 1 === index) return;
        setIndex(index + 1);
    }

    const slideLeft = () => {
        if (index === 0) return;
        setIndex(index - 1);
    }

    return (
        <div className='photo-slider'>
            <img 
                src={arr[index]}
                alt='Slider item'
            />
            <button 
                className={index !== 0 ? 'left-button' : 'left-button hidden'}
                onClick={slideLeft}
            >
                {"<"}
            </button>
            <button 
                className={index !== arr.length - 1 ? 'right-button' : 'right-button hidden'}
                onClick={slideRight}
            >
                {">"}
            </button>
        </div>
    )
}