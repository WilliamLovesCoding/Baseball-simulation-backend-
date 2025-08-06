// Hello! This project is a simulation of a baseball game. This is to showcase my progress of learning Java Script in Codecademy. More additions to this project will be made as I learn new concepts and other techniques! Enjoy!
// Note: This project will mainly be backend work since I haven't learned anything frontend related and can't show any visuals.

// Enter the name you want your protagonist to be in the "UserName" variable
let userName = 'William';
const opponentTeam = 'Red Sox';
const heroTeam = 'White Sox';
const opponentMemberNames = ['#12 Rodney', '#43 Mike', ' #56 Lary', ' #89 Krudo'];

const introduction = () => {
    console.log(`Welcome, ${userName}, today we will be playing a 3 inning baseball game against the ${opponentTeam}, let us begin.`);
}
introduction();

let equipmentList = ['Catching Glove' ,'baseballs' , 'Cleets' , 'and a Wooden Bat'];
console.log(`You will be using these in the game: ${equipmentList}.`);

const introductionPitcher = () => {
    console.log(`Pitching for the ${opponentTeam}, ${opponentMemberNames[0]}.`);
    console.log('*Throws ball*');
}
introductionPitcher();

// This variable and function declaration is used to generate either a strike or a ball
/*function strike () {
    let pitchForStrike = Math.floor(Math.random() * 2 );
    if (pitchForStrike === 1) {
        console.log('Strike!');
        return true;
    } else {
        console.log('Ball!');
        return false;
    }
} */
// Still testing and figuring out how to count strikes and balls to make more dynamic. Ex: Strike 1, Strike 2, Ball 1, etc..
//strike();

// This code is an attempt on logically connecting strikes and balls together (not finished yet).

const strikeBall = () => {
    let counterStrike = ['Strike 1!', 'Strike 2!', "Strike 3, You're out!"]
    //let pitchForStrike = Math.floor(Math.random() * 2 );
    for (let i = 0; i < counterStrike.length; i++) {
        return counterStrike[i]
    }
}
console.log(strikeBall());

console.log(`Outstanding! You just hit a homerun against ${opponentMemberNames[0]}. That's an automatic point for your team!`);

console.log('That was great batting for this inning. now its time for you to switch to pitching as the star pitcher for the team!')
// I am currently experimenting with a new function that keeps tracks of Strikes and Balls using arrays and loops above
/*const strikeLimit = () => {
    if (strike() === true) {
        console.log('Strike 2!');
        return true;
    } else {
        console.log('Ball 2!');
        return false;
    }
}
strikeLimit(); */
// I am currently experimenting with a new function that keeps tracks of Strikes and Balls using arrays and loops
/*const strikeLimitTwo = () => {
    if (strikeLimit() === true) {
        console.log('Strike 3!');
    } else {
        console.log('Ball 3!');
    }
}
strikeLimitTwo();*/

// Will add a function for hitting a homerun and scoring in the future.

// This is the script for hero team pitching the ball against enemy team. I have not made it this far yet in the game, but just for future reference.
function heroPitcher (opponentSide) {
    return console.log(`Great job! you will now be pitching against ${opponentMemberNames[1]}.`)
}
heroPitcher();

console.log('*Throws ball*');
// I may reinsert strike and ball function for this part

console.log(`Great job! It is the second inning and you will now be batting again.`);

heroPitcher(opponentMemberNames[2]);

console.log('Excellent! It is now the third inning and you will be batting again.');

// This section will be used to end off the simulation. I may use this to summarize the game and thank user for playing this simulation.

// Will work on integrating array for the user to know what equipment they will bring back home.

console.log('Thank you for playing this simulation! Here are the results of the game:');

// Spoiler alert LOL
console.log(`After you broke your bat during the game, you ended up leaving with ${equipmentList.splice(0,3)}.`);

