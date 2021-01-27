import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/homePage.scss";
import Category from "./Category";
import Search from "./Search";
import { useHistory } from 'react-router-dom';
import { getCategoryBusinessList, resetGotBusinessList, selectCategory } from "../../Redux/Actions/CategoriesActions";

export default function HomePage() {
    const { categories, gotBusinessList, selectedCategory } = useSelector((state) => state.CategoriesReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (category, _id) => {
        dispatch(getCategoryBusinessList(_id));
        dispatch(selectCategory({category, _id}));
    }

    useEffect(() => {
        if (gotBusinessList !== false && selectedCategory !== null) {
            history.push(`/${selectedCategory.category}`);
        };

        return () => dispatch(resetGotBusinessList());
    }, [gotBusinessList, history, dispatch, selectedCategory]);

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
