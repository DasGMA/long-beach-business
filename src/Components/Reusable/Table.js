import React from "react";
import PropTypes from "prop-types";
import "../../Styles/table.scss";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../Redux/Actions/ModalActions";
import { selectCategory } from "../../Redux/Actions/CategoriesActions";

export default function Table({
    data,
    dataNames,
    tableHeader,
    tableFooter,
    showOptions,
}) {
    const dispatch = useDispatch();

    if (dataNames.length !== tableHeader.length) {
        return console.log(
            "Data names must be the same length as table header."
        );
    }

    const renderHeader = () => {
        return tableHeader.map((item, index) => {
            return <th key={index}>{item.toUpperCase()}</th>;
        });
    };

    const renderTD = (item) => {
        let arr = [];
        for (const dataName of dataNames) {
            if (Object.keys(item).includes(dataName)) {
                arr.push(<td key={dataName}>{item[dataName]}</td>);
            }
        }

        return arr;
    };

    const onDelete = (item) => {
        const { type } = item;
        switch (type) {
            case "category":
                dispatch(toggleModal(`${type}Delete`));
                dispatch(selectCategory(item));
                return;
            default:
                return;
        }
    };

    const onEdit = (item) => {
        const { type } = item;
        switch (type) {
            case "category":
                dispatch(toggleModal(`${type}Edit`));
                dispatch(selectCategory(item));
                return;
            default:
                return;
        }
    };

    const renderButtons = (item) => {
        return (
            <div className="options">
                <Button 
                    icon="edit" 
                    iconSize={2} 
                    onClick={() => onEdit(item)} 
                />
                {/* <Button 
                    icon='eye'
                    iconSize={2}
                /> */}
                <Button
                    icon="trash"
                    iconSize={2}
                    onClick={() => onDelete(item)}
                />
            </div>
        );
    };

    const renderRows = () => {
        return data.map((item, index) => {
            return (
                <tr key={item._id}>
                    {renderTD(item)}
                    {showOptions && <td>{renderButtons(item)}</td>}
                </tr>
            );
        });
    };

    return (
        <div className="table">
            <table>
                <tbody>
                    <tr>
                        {renderHeader()}
                        {showOptions && <th>OPTIONS</th>}
                    </tr>
                </tbody>
                <tbody>{renderRows()}</tbody>
                <tfoot></tfoot>
            </table>
        </div>
    );
}

Table.defaultProps = {
    showOptions: true,
};

Table.propTypes = {
    hasHeader: PropTypes.bool,
    hasPagination: PropTypes.bool,
    data: PropTypes.array.isRequired,
    dataNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    tableHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
    tableFooter: PropTypes.func,
    columnsNumber: PropTypes.number,
    showOptions: PropTypes.bool,
};
