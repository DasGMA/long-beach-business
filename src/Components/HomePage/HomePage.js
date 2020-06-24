import React from "react";
import "../../Styles/homePage.scss";
import Category from "./Category";
import Search from "./Search";

export default function HomePage() {
    const renderCategories = () => {
        return Array(10)
            .fill()
            .map((c, i) => <Category key={i} />);
    };
    return (
        <div className='homePage'>
            <Search />

            <h1>Business Categories</h1>
            <div className='categories'>{renderCategories()}</div>
        </div>
    );
}
