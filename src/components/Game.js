import React from 'react';
import UpperSection from './UpperSection';
import { useState } from 'react';

const Game = () => {
    const [queue, setQueue] = useState(3);
    const [dices, setDices] = useState([null, null, null, null, null]);
    const [blockItem, setBlockItem] = useState([false, false, false, false, false])
    const arrayOfID = [1, 2, 3, 4, 5];

    const handleButtonClick = () => {
        let newValues = dices;
        if (queue > 0 ) {
            dices.map((item, index) => {
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
        console.log(number);
        for (let i = 0; i < newValues.length; i++) {
            if(i === number) {
                newValues[i] = !newValues[i];
            }
        }
        console.log(newValues)
        setBlockItem(newValues);
    }

    return ( 
        <>
            <div className="table">
                {dices.map((item, index) => (
                    <div 
                        key={arrayOfID[index]} 
                        className="dice"
                        onClick={() => handleDiceClick(index)}
                        >
                        {item}
                    </div>
                ))}
            </div>
            {console.log(dices)}
            <button onClick={handleButtonClick}>Roll dice</button>
            <UpperSection />
        </>
    );
}
 
export default Game;