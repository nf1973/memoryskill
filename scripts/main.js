//Get DOM elements
const yellowButton= document.querySelector('#yellow-button'); 
const redButton   = document.querySelector('#red-button'); 
const blueButton  = document.querySelector('#blue-button'); 
const greenButton = document.querySelector('#green-button'); 
var startButton = document.getElementById('start-button');
const startButtonCss = document.querySelector('#start-button');

let flashTime=700;
let gapBetween=flashTime+200; 
let gapBeforeNextRound=1000;

let readyToPlay=false;
let userSequence = [];
let sequence = [];
var round = 0;

async function startGame() {
    //Set Inital Colors only if they are not already set
    if (sequence.length==0) {
        for (i=0; i<3; i++) {
            addToSequence(sequence);
        }
    }

    //round = sequence.length;

    startButton.innerHTML="Watch Sequence ("+sequence.length+")";
    startButtonCss.style.backgroundColor="#4281a4";

    let delay = await delayres(gapBeforeNextRound); 

    console.log(sequence);

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
        checkSequence(round, "yellow");
    }
}

function redClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("red");
        flashButton("red",200);
        checkSequence(round, "red");
    }
}

function blueClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("blue");
        flashButton("blue",200);
        checkSequence(round, "blue");
    }
}

function greenClicked() {
    if (readyToPlay) { //if not readyToPlay then ignore the click!
        userSequence.push("green");
        flashButton("green",200);
        checkSequence(round, "green");
    }
}

function checkSequence(round, colorClicked) {
    // for (let i = 0; i < (userSequence.length); i++) {
    //     console.log(i,sequence);
    //     if (userSequence[i]!=sequence[i]) {
    //     gameOver();
    //    }
    //    else if (userSequence.length==sequence.length) {
    //     startButton.innerHTML="Watch Sequence";
    //     userSequence.length=0;
    //     readyToPlay = false;
    //     addToSequence(sequence);
    //     startGame();
    //  }
    //  }
    console.log (round,colorClicked,sequence[round]);
    if (colorClicked == sequence[round]) {
        console.log("Correct");
    }
    else {
        console.log("False");
    }
    round++;

    
}

function gameOver() {
    startButton.innerHTML="Game Over";
    userSequence.length=0;
    sequence.length=0;
    readyToPlay = false;
    startButtonCss.style.backgroundColor="red";

}


