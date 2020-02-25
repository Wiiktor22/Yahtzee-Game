import React from 'react';
import UpperSection from './UpperSection';
import { useState } from 'react';
import LowerSection from './LowerSection';
import HelpPage from './HelpPage';
import FinishedGame from './FinishedGame';

const Game = () => {
    const [queue, setQueue] = useState(3);
    const [round, setRound] = useState(14);
    const [dices, setDices] = useState([null, null, null, null, null]);
    const [blockItem, setBlockItem] = useState([false, false, false, false, false]);
    const [canPlay, setCanPlay] = useState(false);
    const [showHelp, setShowHelp] = useState(false);
    const arrayOfID = [1, 2, 3, 4, 5];

    const handleButtonClick = () => {
        setCanPlay(true);
        let newValues = dices;
        if (queue > 0 ) {
            newValues.map((item, index) => {
            if (!blockItem[index]) {
                let randomValue = Math.floor(Math.random() * 6) + 1;
                newValues[index] = randomValue;
            }
            return newValues
        })
        } else {
            alert("You can not roll dice more than three times at single round!")
        }
        setQueue(queue - 1);
        setDices(newValues);
    }

    const handleDiceClick = number => {
        let newValues = blockItem;
        for (let i = 0; i < newValues.length; i++) {
            if(i === number) {
                newValues[i] = !newValues[i];
            }
        }
        setBlockItem(newValues);
    }
    
    const changeCanPlay = () => {
        setCanPlay(false);
    }

    const setDefault = () => {
        setQueue(3);
        setDices([null, null, null, null, null]);
        setBlockItem([false, false, false, false, false]);
        setRound(round - 1);
    }

    return ( 
        <>
            {console.log(round)}
            <div className="table">
                {dices.map((item, index) => (
                    <div 
                        key={arrayOfID[index]} 
                        className={blockItem[index] ? "dice blocked" : "dice"}
                        onClick={() => handleDiceClick(index)}
                        >
                        {item}
                    </div>
                ))}
            </div>
            <button onClick={handleButtonClick}>Roll dice</button>
            <UpperSection 
                dices={dices}
                canPlay={canPlay}
                changeCanPlay={changeCanPlay}
                setDefault={setDefault}
                round={round}
            />
            <LowerSection 
                dices={dices}
                canPlay={canPlay}
                changeCanPlay={changeCanPlay}
                setDefault={setDefault}
                round={round}
            />
            {!round && <FinishedGame />}
            <button onClick={() => setShowHelp(!showHelp)}>
                {showHelp ? "Close help page" : "Show me help page"}
            </button>
            {showHelp && <HelpPage />}
        </>
    );
}
 
export default Game;