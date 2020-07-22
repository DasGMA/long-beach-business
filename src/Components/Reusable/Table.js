import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/table.scss';
import Button from './Button';

export default function Table({ data, dataNames, tableHeader, tableFooter }) {
    if (dataNames.length !== tableHeader.length) {
        return alert('Data names must be the same length as table header.');
    }

    const renderHeader = () => {
        return tableHeader.map((item, index) => {
            return (
                <th key={index}>{item.toUpperCase()}</th>
            );
        });
    };
    
    const renderTD = (item) => {
        let arr = [];
        for (const dataName of dataNames) {
            if (Object.keys(item).includes(dataName)) {
                arr.push(<td key={dataName}>{item[dataName]}</td>);
            };
        };

        return arr;
    }

    const renderButtons = () => {
        return (
            <div className='options'>
                <Button 
                    icon='edit'
                    iconSize={2}
                />
                {/* <Button 
                    icon='eye'
                    iconSize={2}
                /> */}
                <Button 
                    icon='trash'
                    iconSize={2}
                />
            </div>
        )
    }

    const renderRows = () => {
        return data.map((item, index) => {
            return (
                <tr key={item._id}>
                    {renderTD(item)}
                    <td>{renderButtons()}</td>
                </tr>
            )
        })
    }

    

    return (
        <div className='table'>
            <table>
                <tbody>
                    <tr>
                        {renderHeader()}
                        <th>OPTIONS</th>
                    </tr>
                </tbody>
                <tbody>
                    {renderRows()}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

Table.propTypes = {
    hasHeader: PropTypes.bool,
    hasPagination: PropTypes.bool,
    data: PropTypes.array.isRequired,
    dataNames: PropTypes.arrayOf(PropTypes.string).isRequired,
    tableHeader: PropTypes.arrayOf(PropTypes.string).isRequired,
    tableFooter: PropTypes.func,
    columnsNumber: PropTypes.number
}
