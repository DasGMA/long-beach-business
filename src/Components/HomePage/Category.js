import React, {useEffect} from "react";
import "../../Styles/category.scss";
import { useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { getCategoryBusinessList, resetGotBusinessList } from "../../Redux/Actions/CategoriesActions";

export default function Category(props) {
    const {gotBusinessList} = useSelector(state => state.CategoriesReducer);

    const history = useHistory();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(getCategoryBusinessList(props.category, props._id));
    }

    useEffect(() => {
        if (gotBusinessList) {
            history.push(`/${props.category}`);
            dispatch(resetGotBusinessList());
        };
    }, [gotBusinessList, history, props.category, dispatch]);

    const className = props.count > 0 ? 'category' : 'category hidden';

    return (
        <button className={className} onClick={onClick}>
            <p>{props.category}</p>
        </button>
    );
}
