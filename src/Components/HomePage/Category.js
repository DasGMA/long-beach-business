import React from "react";
import "../../Styles/category.scss";

export default function Category({ count, category, onClick}) {
    // If category is created but business count is 0, category won't show on homepage.
    const className = count > 0 ? 'category' : 'category hidden';

    return (
        <button className={className} onClick={onClick}>
            <p>{category}</p>
        </button>
    );
}
