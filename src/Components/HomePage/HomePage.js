import React from "react";
import { useSelector } from "react-redux";
import "../../Styles/homePage.scss";
import Category from "./Category";
import Search from "./Search";

export default function HomePage() {
    const { categories } = useSelector((state) => state.CategoriesReducer);

    const renderCategories = () => {
        return categories.map((category) => (
            <Category
                key={category._id}
                category={category.categoryName}
                _id={category._id}
                count={category.businessCount}
            />
        ));
    };
    return (
        <div className="homePage">
            <Search />

            <h1>Business Categories</h1>
            <div className="categories">{renderCategories()}</div>
        </div>
    );
}
