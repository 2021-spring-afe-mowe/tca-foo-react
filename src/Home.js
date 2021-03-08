import React from 'react';

import { useHistory } from 'react-router-dom';

export const Home = ({
    totalNumberOfGames
    , notifyNewGameStartTime
}) => {

    const history = useHistory();

    const startGame = () => {
        notifyNewGameStartTime("Foo Bar Cat");
        history.push("/play");
    };

    return(
        <>
            <h1>
                Home ({totalNumberOfGames})
            </h1>

            <button
                onClick={startGame}
            >
                Play
            </button>
        </>
    );
};