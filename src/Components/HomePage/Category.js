import React from "react";
import "../../Styles/category.scss";

export default function Category(props) {
    const className = props.count > 0 ? 'category' : 'category hidden';

    return (
        <button className={className} onClick={props.onClick}>
            <p>{props.category}</p>
        </button>
    );
}
