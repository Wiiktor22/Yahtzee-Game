import React, { useState } from 'react';

const UpperSection = props => {
    const [wasChosen, setWasChosen] = useState([false, false, false, false, false, false]);
    const [points, setPoints] = useState([null, null, null, null, null, null]);
    const textForTable = ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes"];
     
    const checkPossibilityToPlay = number => {
        let newValues = props.dices
        let actualPoints = 0;
        let actualDice = number + 1;
        newValues.map(item => {
            if (item === actualDice) {
                actualPoints += actualDice;
            }
        })
        console.log(actualPoints)
        return actualPoints;
    }

    const settingPoints = () => {
        let newValues = points;
        newValues.map((item, index) => {
            if (!wasChosen[index]) {
                newValues[index] = checkPossibilityToPlay(index);
            }
            return newValues;
        })
        console.log(newValues);
        setPoints(newValues);
    };

    return (
        <>
        {props.dices[0] !== null && settingPoints()}
        <div className="upperSection">
            <table className="upperSection__table">
                <tbody>
                    <tr className="upperSection__column">
                        <th scope="col" className="upperSection__strong">Upper Section</th>
                        <th scope="col" className="upperSection__strong">Points</th>
                    </tr>
                    {points.map((item, index) => (
                        <tr className="upperSection__column" key={textForTable[index]}>
                            <th scope="row" className="upperSection__strong">
                                {textForTable[index]}
                            </th>
                            <td>{item}</td>
                        </tr>
                    ))}
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Total</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Bonus (63+ points = 100)</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" >Total of Upper Section</th>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
}
 
export default UpperSection;