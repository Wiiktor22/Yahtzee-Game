import React from 'react';

const HelpPage = () => {
    return ( 
        <div className="help">
            <h2 className="help__header">Help page</h2>
            <h3 className="help__header--small">Upper Section</h3>
            <div className="help__text">
                <p>Ones: Get as many ones as possible.</p>
                <p>Twos: Get as many twos as possible.</p>
                <p>Threes: Get as many threes as possible.</p>
                <p>Fours: Get as many fours as possible.</p>
                <p>Fives: Get as many fives as possible.</p>
                <p>Sixes: Get as many sixes as possible.</p>
                <br />
                <p>You’ll get as many points as many dice with the specific number you have. E.G. if you get 2,3,3,3,4 and you choose threes you will get 9 points because 3 dice for 3 points are equal to 3*3=9.</p>
                <p>If you’ll have more than 63 points you will get a bonus which means 100 extra points.</p>
            </div>
            <h3 className="help__header--small">Lower Section</h3>
            <div className="help__text">
                <p>Three of a kind: Get three dice with the same number.</p>
                <p>Four of a kind: Get four dice with the same number.</p>
                <p>Odd: Sum of all odd numbers.</p>
                <p>Even: Sum of all even numbers.</p>
                <p>Small straight: Get five sequential dice 1,2,3,4,5.</p>
                <p>Large straight: Get five sequential dice 2,3,4,5,6.</p>
                <p>Chance: You can put anything into chance. The score is simply the sum of the dice.</p>
                <p>Yahtzee: Five of a kind. Scores 50 points + sum of the five dice</p>
            </div>
        </div>
    );
}
 
export default HelpPage;