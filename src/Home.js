import React from 'react';
import {
    useHistory
} from 'react-router-dom';

export const Home = () => {
    const history = useHistory();

    return(
    <>  
    <h1>Home</h1>
    <button onClick={() => history.push('/play') }>Play!</button>
    </>
    ); 
}