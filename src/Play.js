import React from 'react';
import { useHistory } from 'react-router-dom';

export const Play = ({
    appWinGame
    , appLoseGame
}) => {

    const history = useHistory();

    const winGame = () => {
        appWinGame();
        history.goBack();
    };

    const loseGame = () => {
        appLoseGame();
        history.goBack();
    };

    return (
        <>
            <h1>
                Play
            </h1>
            <button
                onClick={winGame}
            >
                Win
            </button>
            &nbsp;
            <button
                onClick={loseGame}
            >
                Lose
            </button>
        </>
    );
};