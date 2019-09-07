import React from 'react';
import PlayersCard from './PlayersCard';
import useDarkMode from '../hooks/useDarkMode';
 
const Display = (props) => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }
    console.log(props);

    return(
        <div>
            <h1>Women's WorldCup Team</h1>
            <div className="dark-mode">
            <div className="dark-mode__toggle">
            <div 
            onClick={toggleMode}
            className={darkMode ? 'toggle toggled' : 'toggle'}
            />
            </div>
            <h3>{props.data.map(player => <PlayersCard data={player} />)}</h3>
            </div>
        </div>
    )
}

export default Display;

