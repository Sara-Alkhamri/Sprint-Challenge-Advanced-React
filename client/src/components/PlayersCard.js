import React from 'react';

const PlayersCard = (props) => {
    const {name, country, searches} = props.data;

    return(
        <div>
            <h4>Name: {name}</h4>
            <h4>Country: {country}</h4>
            <p>Number of Searches: {searches}</p>
        </div>
    )
}

export default PlayersCard;