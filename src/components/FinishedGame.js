import React from 'react';

const FinishedGame = () => {
    const restart = () => {
        window.moveTo(0,0);
        window.location.reload();
        return false;
    }
    
    return ( 
        <div className="finished">
            <h2 className="finished__header">Congratulations!</h2>
            <p className="finished__text">You have finished your game.</p>
            <button onClick={restart}>Restart Game</button>
        </div>
    );
}
 
export default FinishedGame;