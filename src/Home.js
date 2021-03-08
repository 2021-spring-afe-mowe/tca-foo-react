import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home = ({totalNumberOfGames}) => {

    const history = useHistory();
    
    return(
        <>
            <h1>
                Home ({totalNumberOfGames})
            </h1>

            <button
                onClick={() => history.pushState('play')}
            >
                Play
            </button>
        </>
    );
};