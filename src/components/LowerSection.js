import React, { useState, useEffect } from 'react';

const LowerSection = props => {
    const [wasChosen, setWasChosen] = useState([false, false, false, false, false, false, false, false]);
    const [points, setPoints] = useState([null, null, null, null, null, null, null, null]);
    const textForTable = ["3 of kind", "4 of kind", "Odd", "Even", "Low straight", "High straight", "Yahtzee", "Chance"];
    const [normalPoints, setNormalPoints] = useState(0);

    const checkNumberOfKind = ruleNumber => {
        let points = 0, amountofNumber = 0;
        const numbers = [1, 2, 3, 4, 5, 6];
        numbers.map(item => {
            props.dices.map(dice => {
                if (dice === item) {
                    amountofNumber++;
                }
            })
            if (amountofNumber >= ruleNumber) {
                points = ruleNumber * item;
            }
            amountofNumber = 0;
        })
        return points;
    }

    const checkOddOrEven = ruleNumber => {
        let points = 0;
        props.dices.map(item => {
            if(item % 2 === ruleNumber) {
                points += item;
            }
        })
        return points
    }

    const checkStraight = tab => {
        let points = 0;
        let numbers = tab;
        props.dices.map(item => {
            numbers.map((number, index) => {
                if (item === number) {
                    points++;
                    numbers[index] = 0;
                }
            })
        })
        if (points === 5) {
            if (numbers[numbers.lenght - 1] === 6) return 20
            else return 15
        } else {
            return 0
        }
    }

    const checkChance = () => {
        let sum = 0;
        props.dices.map(item => {
            sum += item
        })
        return sum
    }

    const settingPoints = () => {
        let newValues = points;
        const arrayOfRules = [checkNumberOfKind(3), checkNumberOfKind(4), checkOddOrEven(1), checkOddOrEven(0), checkStraight([1, 2, 3, 4, 5]), checkStraight([2, 3, 4, 5, 6]), checkNumberOfKind(5), checkChance()]
        wasChosen.map((item, index) => {
            if(!item) {
                points[index] = arrayOfRules[index];
            }
        })
        setPoints(newValues);
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

    const sumUpPoints = () => {
        setNormalPoints(0);
        let normalValue = 0;
        points.map(item => {
            normalValue += item;
        })
        setNormalPoints(normalValue);
    }

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

    useEffect(() => {
        if (props.dices[0] !== null && props.canPlay) {
            settingPoints();
        }
        props.changeCanPlay();
    }, [props.canPlay])

    return ( 
        <>
            <div className="upperSection">
                <table className="upperSection__table">
                    <tbody>
                        <tr className="upperSection__column">
                            <th scope="col" className="upperSection__strong">Lower Section</th>
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
                            <th scope="row" className="upperSection__strong">Total of Lower Section</th>
                            <td>{normalPoints}</td>
                        </tr>
                        <tr className="upperSection__column">
                            <th scope="row" >Total (Upper + Lower)</th>
                            <td>TODO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default LowerSection;