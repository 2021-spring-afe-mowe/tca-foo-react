import React from 'react';
import { useHistory } from 'react-router-dom';

export const Play = () => {

    const history = useHistory();

    return (
        <>
            <h1>
                Play
            </h1>
            <button
                onClick={() => history.goBack()}
            >
                Win
            </button>
            &nbsp;
            <button
                onClick={() => history.goBack()}
            >
                Loss
            </button>
        </>
    );
};