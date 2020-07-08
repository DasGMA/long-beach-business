import React from "react";
import "../../Styles/category.scss";

export default function Category(props) {
    return (
        <button className='category'>
            <p>{props.categoryName}</p>
        </button>
    );
}
