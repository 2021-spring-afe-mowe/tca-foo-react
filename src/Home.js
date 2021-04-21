import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

export const Home = ({
    totalNumberOfGames
    , appStartGame
    , gameTimeFacts
}) => {

    const history = useHistory();

    const startGame = () => {
        appStartGame();
        history.push("/play");
    };

    const [myProp, updateMyProp] = useState("Tom");

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

            <h3>
                { isFinite(gameTimeFacts.longest) ? gameTimeFacts.longest : 0 } Longest Game Ever
            </h3>

            <h3>
                { isFinite(gameTimeFacts.shortest) ? gameTimeFacts.shortest : 0 } Shortest Game Ever
            </h3>

            <br />
            <br />

            <input
                type="text"
                value={myProp}
                onChange={(e) => updateMyProp(e.target.value)} 
            />
        
            <h3>
                { myProp }
            </h3>
        </>
    );
};