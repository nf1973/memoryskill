//Get DOM elements
const yellowButton= document.querySelector('#yellow-button'); 
const redButton   = document.querySelector('#red-button'); 
const blueButton  = document.querySelector('#blue-button'); 
const greenButton = document.querySelector('#green-button'); 
var startButton = document.getElementById('start-button');
const startButtonCss = document.querySelector('#start-button');
const myAudioContext = new AudioContext();

let flashTime=500;
let gapBetween=flashTime+100; 
let gapBeforeNextRound=1000;

let gameIsRunning=false;
let readyToPlay=false;
var userSequence = [];
var sequence = [];
var thisRound = 0;

function startButtonClicked() {
    if (!gameIsRunning) {
        startGame();
    }
} 


async function startGame() {

    gameIsRunning=true;

    //Set Inital Colors only if they are not already set
    if (sequence.length==0) {
        for (i=0; i<3; i++) {
            addToSequence(sequence);
        }
    }

    startButton.innerHTML="Watch Sequence ("+sequence.length+")";
    startButtonCss.style.backgroundColor="#4281a4";

    let delay = await delayres(gapBeforeNextRound); 

    //console.log(sequence);  //Uncomment to invoke 'Cheat mode'!!

    for (flashes of sequence) {
        flashButton(flashes,flashTime)
        let delay = await delayres(gapBetween);
    }
    readyToPlay = true;
    startButton.innerHTML="Repeat Sequence";
}

function yellowClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("yellow");
        flashButton("yellow",200);
        checkSequence(userSequence.length, "yellow");
    }
}

function redClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("red");
        flashButton("red",200);
        checkSequence(userSequence.length, "red");
    }
}

function blueClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("blue");
        flashButton("blue",200);
        checkSequence(userSequence.length, "blue");
    }
}

function greenClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("green");
        flashButton("green",200);
        checkSequence(userSequence.length, "green");
    }
}

function checkSequence(thisRound, colorClicked) {

    if (colorClicked != sequence[thisRound-1]) { //reduce by 1 because it has already been incremented
        gameOver(sequence.length-1);
        
    }
    else if (userSequence.length==sequence.length) {
        startButton.innerHTML="Watch Sequence";
        userSequence.length=0;
        readyToPlay = false;
        addToSequence(sequence);
        startGame();
    }
}

function gameOver(moves) {
    if (moves >= 3) {
        startButton.innerHTML="Game Over ("+moves+")";
    }
    else {
        startButton.innerHTML="Game Over";
    }
    gameIsRunning=false;
    userSequence.length=0;
    sequence.length=0;
    readyToPlay = false;
    startButtonCss.style.backgroundColor="red";
}


