import React from 'react';

const SearchResultsRow = (props) => {
    const setActive = (e) => {
        e.preventDefault();
        props.setActiveHouse(props.house);
    };

    const { address, price, likes } = props.house
    return <tr onClick={setActive}>
        <td>{address}</td>
        <td>{price}</td>
        <td>{likes}</td>
    </tr>
};

export default SearchResultsRow;