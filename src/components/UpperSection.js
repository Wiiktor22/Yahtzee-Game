import React, { useState, useEffect } from 'react';

const UpperSection = props => {
    const [wasChosen, setWasChosen] = useState([false, false, false, false, false, false]);
    const [points, setPoints] = useState([null, null, null, null, null, null]);
    const textForTable = ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixes"];
    const [normalPoints, setNormalPoints] = useState(0);
    const [totalPoints, setTotalPoints] = useState(0);
     
    const checkPossibilityToPlay = number => {
        let newValues = props.dices
        let actualPoints = 0;
        let actualDice = number + 1;
        newValues.map(item => {
            if (item === actualDice) {
                actualPoints += actualDice;
            }
        })
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
        setPoints(newValues);
    };

    useEffect(() => {
        if (props.dices[0] !== null && props.canPlay) {
            settingPoints();
        }
        props.changeCanPlay();
    }, [props.canPlay])

    const handlePointTableClick = number => {
        if (props.canShow) {
            let newValues = wasChosen;
            newValues[number] = true;
            setWasChosen(newValues);
            props.setDefault();
            resetTablePoints();
            sumUpPoints();
            props.setShow();
        }
    }

    const sumUpPoints = () => {
        setTotalPoints(0);
        setNormalPoints(0);
        let normalValue = normalPoints;
        let totalValue = totalPoints;
        normalValue = 0;
        points.map(item => {
            normalValue += item;
        })
        totalValue = normalValue;
        if (normalValue > 63) {
            totalValue += 100;
        }
        setTotalPoints(totalValue);
        setNormalPoints(normalValue);
    }

    const resetTablePoints = () => {
        let newValues = points;
        newValues.map((item, index) => {
            if (!wasChosen[index]) {
                newValues[index] = null;
            }
        })
        setPoints(newValues);
    }

    return (
        <>
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
                                <td
                                    className={wasChosen[index] ? "" : "red-font"}
                                    onClick={() => handlePointTableClick(index)}
                                >{item}</td>
                            </tr>
                        ))}
                        <tr className="upperSection__column">
                            <th scope="row" className="upperSection__strong">Total</th>
                            <td>{normalPoints}</td>
                        </tr>
                        <tr className="upperSection__column">
                            <th scope="row" className="upperSection__strong">Bonus (63+ points = 100)</th>
                            <td>{normalPoints > 63 ? "100" : "-"}</td>
                        </tr>
                        <tr className="upperSection__column">
                            <th scope="row" >Total of Upper Section</th>
                            <td>{totalPoints}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default UpperSection;