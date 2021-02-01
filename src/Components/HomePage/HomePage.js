import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/homePage.scss";
import Category from "./Category";
import Search from "./Search";
import { useHistory } from 'react-router-dom';
import { selectCategory } from "../../Redux/Actions/CategoriesActions";

export default function HomePage() {
    const { categories } = useSelector((state) => state.CategoriesReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (category, _id) => {
        dispatch(selectCategory({category, _id}));
        history.push(`/${category}`);
    }

    const renderCategories = () => {
        return categories.map((category) => (
            <Category
                key={category._id}
                count={category.businessCount}
                category={category.categoryName}
                onClick={() => onClick(category.categoryName, category._id)}
                src={category.image.imageUrl}
            />
        ));
    };

    return (
        <div className="homePage">
            <Search />
            <h1>Latest Offers</h1>
            <h1>Categories</h1>
            <div className="categories">{renderCategories()}</div>
        </div>
    );
}
