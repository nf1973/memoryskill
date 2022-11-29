async function flashButton(color, timer) {
    switch(color) {
     case "yellow":
        yellowButton.style.backgroundColor="yellow";
        beep(200,700-40,30); 
        break;
     case "red":
        redButton.style.backgroundColor="red";   
        beep(200,560-36,30);  
        break;
     case "blue":
        blueButton.style.backgroundColor="blue";
        beep(200,350-20,30);  
        break;
     case "green":    
        greenButton.style.backgroundColor="green";
        beep(200,400-8,30); 
         break;
     default:
       // will never happen
     }
     
     let delay = await delayres(timer);

     yellowButton.style.backgroundColor="transparent";
     redButton.style.backgroundColor="transparent";
     blueButton.style.backgroundColor="transparent";
     greenButton.style.backgroundColor="transparent";
 
 }


 function addToSequence(sequence) {
    r = Math.floor(Math.random() * 4);
    switch(r) {
        case 0:
            return sequence.push("red");
            break;
        case 1:
            return sequence.push("yellow");
            break;
        case 2:
            return sequence.push("green");
            break;
        case 3:
            return sequence.push("blue");
            break;
        default:
    } 
}


 const delayres = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  }




/**
 * Helper function to emit a beep sound in the browser using the Web Audio API.
 * 
 * @param {number} duration - The duration of the beep sound in milliseconds.
 * @param {number} frequency - The frequency of the beep sound.
 * @param {number} volume - The volume of the beep sound.
 * 
 * @returns {Promise} - A promise that resolves when the beep sound is finished.
 */
function beep(duration, frequency, volume){
    return new Promise((resolve, reject) => {
        // Set default duration if not provided
        duration = duration || 200;
        frequency = frequency || 287;
        volume = volume || 30;

        try{
            let oscillatorNode = myAudioContext.createOscillator();
            let gainNode = myAudioContext.createGain();
            oscillatorNode.connect(gainNode);

            // Set the oscillator frequency in hertz
            oscillatorNode.frequency.value = frequency;

            // Set the type of oscillator
            oscillatorNode.type= "square";
            gainNode.connect(myAudioContext.destination);

            // Set the gain to the volume
            gainNode.gain.value = volume * 0.01;

            // Start audio with the desired duration
            oscillatorNode.start(myAudioContext.currentTime);
            oscillatorNode.stop(myAudioContext.currentTime + duration * 0.001);

            // Resolve the promise when the sound is finished
            oscillatorNode.onended = () => {
                resolve();
            };
        }catch(error){
            reject(error);
        }
    });
}