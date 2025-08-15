// Hello! This project is a simulation of a baseball game. This is to showcase my progress of learning Java Script in Codecademy. More additions to this project will be made as I learn new concepts and other techniques! Enjoy!
// Note: This project will mainly be backend work since I haven't learned anything frontend related and can't show any visuals.

// Enter the name you want your protagonist to be in the "UserName" variable
let userName = '#23 William';
const opponentTeam = 'Red Sox';
const heroTeam = 'White Sox';
const opponentNames = ['#12 Rodney','#43 Mike','#56 Lary','#89 Krudo'];
const heroNames = [userName, '#59 Tom', '#15 Johny','#90 Bob']
const introduction = () => {
    console.log(`Welcome, ${userName}, today we will be playing a 3 inning baseball game against the ${opponentTeam}, let us begin.`);
}
introduction();

const playerDesc = {
    players: {
        player23: {
            _name: userName,
            _Height: '175 Centimeters',
            _age: '24'}
        , playerTom: {
            _name: '#59 Tom',
            _Height: '165 Centimeters',
            _age: '22'
        }, playerJohny: {
            _name: '#15 Johny',
            _Height: '170 Centimeters',
            _age: '25'
        }, playerBob: {
            _name: '#90 Bob',
            _Height: '180 Centimeters',
            _age: '23'
        }, playerRodney: {
            _name: '#12 Rodney',
            _Height: '163 Centimeters',
            _age: '20'
        }, playerMike: {
            _name: '#43 Mike',
            _Height: '172 Centimeters',
            _age: '19'
        }, playerLary: {
            _name: '#56 Lary',
            _Height: '164 Centimeters',
            _age: '22'
        }, playerKrudo: {
            _name: '#89 Krudo',
            _Height: '184 Centimeters',
            _age: '25'
        }
    }
}
    for (let name in playerDesc.players) {
        console.log(`Players in the game are ${playerDesc.players[name]._name}. This is a test.`);
    };


let equipmentList = ['Catching Glove' ,'baseballs' , 'Cleets' , 'and a Wooden Bat'];
console.log(`You will be using these in the game: ${equipmentList}.`);

const randomName = Math.floor(Math.random() * opponentNames.length);

const introductionPitcher = () => {
    console.log(`Pitching for the ${opponentTeam}, ${opponentNames[randomName]}.`);
    console.log('*Throws ball*');
}
introductionPitcher();

// This variable and function declaration is used to generate either a strike or a ball

// Still testing and figuring out how to count strikes and balls to make more dynamic. Ex: Strike 1, Strike 2, Ball 1, etc..


console.log('this is where testing is.')

const strikeBall = () => {
    let strikeCounter = ['Strike 1!', 'Strike 2!', "Strike 3, you're out!", `Outstanding! You just hit a homerun against you're opponent! That's an automatic point for your team!`];
    let pitchForStrike = Math.floor(Math.random() * 10 );
    for (let i = 0; i < 3; i++) {
        pitchForStrike = Math.floor(Math.random() * 10 );
        if (pitchForStrike >= 0 && pitchForStrike <= 3) {
            console.log('Strike 1!');
            console.log(pitchForStrike);
        } else if ('Strike 1!' === true) {
            console.log('Strike 2!')
        }
        else if (pitchForStrike >= 3 && pitchForStrike <= 5) {
            console.log('Strike 2!');
            console.log(pitchForStrike);
        } else if ('Strike 2!' === true) {
            console.log('Strike 3!')
        }
        else if (pitchForStrike >= 6 && pitchForStrike <= 8) {
            console.log(pitchForStrike);
            console.log('Strike 3!');
            break;
        } else {
            console.log(strikeCounter[3]);
            console.log(pitchForStrike);
            break;
        }
    }
}
strikeBall();

/*const strikeBall = () => {
    let strikeCounter = ['Strike 1!', 'Strike 2!', "Strike 3, you're out!", `Outstanding! You just hit a homerun against you're opponent! That's an automatic point for your team!`];
    let pitchForStrike = Math.floor(Math.random() * 10 );
        for (let i = 0; i < strikeCounter.length; i++) {
            pitchForStrike = Math.floor(Math.random() * 2 );
            if (pitchForStrike >= 0 && pitchForStrike <= 3) {
                console.log(strikeCounter[3]);
                console.log(pitchForStrike);
                break;
        } else if (pitchForStrike >= 3 && pitchForStrike <= 5) {
                console.log(strikeCounter[0]);
            console.log(pitchForStrike);
        } else if (strikeCounter[0] === true) {
                 pitchForStrike = Math.floor(Math.random() * 10 );
                return strikeCounter.splice(1,4);
            }
            else if (pitchForStrike >= 6 && pitchForStrike <= 8) {
                console.log(pitchForStrike);
            console.log(strikeCounter[1]);
        } else {
            console.log(strikeCounter[2]);
            console.log(pitchForStrike);
            break;
        }
    }
    }
    strikeBall();*/
//console.log(`Outstanding! You just hit a homerun against ${opponentNames[0]}. That's an automatic point for your team!`);

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
    return console.log(`Great job! you will now be pitching against ${opponentNames[randomName]}.`)
}
heroPitcher();

console.log('*Throws ball*');
// I may reinsert strike and ball function for this part

console.log(`Great job! It is the second inning and you will now be batting again.`);

function teammateBatSpare () {
   return console.log(`After going back into the dugout, you notice that your bat is broken. No worries,${opponentNames[randomName]} has a spare bat.`);
}
teammateBatSpare();


heroPitcher();

console.log('Excellent! It is now the third inning and you will be batting again.');

// This section will be used to end off the simulation. I may use this to summarize the game and thank user for playing this simulation.

// Will work on integrating array for the user to know what equipment they will bring back home.

console.log('Thank you for playing this simulation! Here are the results of the game:');

// Spoiler alert LOL
console.log(`After you broke your bat during the game, you ended up leaving with ${equipmentList.splice(0,3)}.`);
