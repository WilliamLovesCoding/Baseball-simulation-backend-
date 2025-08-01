// Hello! This project is a simulation of a baseball game. This is to showcase my progress of learning Java Script in Codecademy. More additions to this project will be made as I learn new concepts and other techniques! Enjoy!
// Note: This project will mainly be backend work since I haven't learned anything frontend related and can't show any visuals.

// Still deciding whether to keep these variables within Block Scope or as a Global Scope since I feel these are important variables to keep as global.
let username = 'William';
const opponentTeam = 'Red Sox';
const heroTeam = 'White Sox';
const introduction = () => {
    console.log(`Welcome, ${username}, today we will be playing a 3 inning baseball game against the ${opponentTeam}, let us begin.`);
}
introduction();

const opponentPitcher = 'Rodney Landers';
const introductionPitcher = () => {
    console.log(`Pitching for the ${opponentTeam}, #12 ${opponentPitcher}.`);
    console.log('Throws ball');
}
introductionPitcher();

// This variable and function declaration is used to generate either a strike or a ball
function strike () {
    let pitchForStrike = Math.floor(Math.random() * 2 );
    if (pitchForStrike === 1) {
        console.log('Strike!');
        return true;
    } else {
        console.log('Ball!');
        return false;
    }
}
// Still testing and figuring out how to count strikes and balls to make more dynamic. Ex: Strike 1, Strike 2, Ball 1, etc..
//strike();

// This code is an attempt on logically connecting strikes and balls together (not finished yet).
const strikeLimit = () => {
    if (strike() === true) {
        console.log('Strike 2!');
        return true;
    } else {
        console.log('Ball 2!');
        return false;
    }
}
strikeLimit();

const strikeLimitTwo = () => {
    if (strikeLimit() === true) {
        console.log('Strike 3!');
    } else {
        console.log('Ball 3!');
    }
}
strikeLimitTwo();

// Will add a function for hitting a homerun and scoring in the future.

// This is the script for hero team pitching the ball against enemy team. I have not made it this far yet in the game, but just for future reference.
function heroPitcher () {
    console.log(`Great job! you will now be pitching against ${opponentPitcher}`)
}
heroPitcher();

