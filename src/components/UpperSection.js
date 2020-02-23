import React from 'react';

const UpperSection = () => {
    return ( 
        <div className="upperSection">
            <table className="upperSection__table">
                <tbody>
                    <tr className="upperSection__column">
                        <th scope="col" className="upperSection__strong">Upper Section</th>
                        <th scope="col" className="upperSection__strong">Points</th>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Ones</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Twos</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Threes</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Fours</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Fives</th>
                        <td></td>
                    </tr>
                    <tr className="upperSection__column">
                        <th scope="row" className="upperSection__strong">Sixes</th>
                        <td></td>
                    </tr>
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
    );
}
 
export default UpperSection;