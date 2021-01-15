import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Styles/homePage.scss";
import Category from "./Category";
import Search from "./Search";
import { useHistory } from 'react-router-dom';
import { getCategoryBusinessList, resetGotBusinessList } from "../../Redux/Actions/CategoriesActions";

export default function HomePage() {
    const { categories, gotBusinessList } = useSelector((state) => state.CategoriesReducer);
    const [cat, setCat] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = (category, _id) => {
        dispatch(getCategoryBusinessList(category, _id));
        setCat(category);
    }

    useEffect(() => {
        if (gotBusinessList) {
            history.push(`/business/${cat}`);
            dispatch(resetGotBusinessList());
            setCat('');
        };
    }, [gotBusinessList, history, cat, dispatch]);

    const renderCategories = () => {
        return categories.map((category) => (
            <Category
                key={category._id}
                count={category.businessCount}
                category={category.categoryName}
                onClick={() => onClick(category.categoryName, category._id)}
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
